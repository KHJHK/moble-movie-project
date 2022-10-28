package com.movie.function;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.movie.dao.ScheduleDao;
import com.movie.dao.TheaterDao;
import com.movie.service.MovieService;
import com.movie.service.PickService;
import com.movie.service.ScheduleService;
import com.movie.service.SeatService;
import com.movie.service.TheaterService;
import com.movie.vo.ScheduleVo;
import com.movie.vo.TheaterVo;

@Component
public class ScheduleMaker {
	@Autowired
	private TheaterService theaterService;
	@Autowired
	private TheaterDao theaterDao;
	
	@Autowired
	private ScheduleService scheduleService;
	@Autowired
	private ScheduleDao scheduleDao;
	
	@Autowired
	private SeatService seatService;
	
	@Autowired
	private PickService pickService;
	
	@Autowired
	private MovieService movieService;
	
	//스캐줄표 list
	private static List<ScheduleVo> scheduleList = new ArrayList<ScheduleVo>();
	
	//영화 insert시 영화 id값을 받아 스케줄을 만드는 메서드
	//상영관 id, 상영 날짜, 상영 시간이 모두 겹칠 경우 스케줄 다시 선정
	//날짜, 시간은 유동적이니 날짜와 시간은 비워둔 상태로 생성
	public void makeSchedule(Long movieId){
		String time = "";
		System.out.println(theaterService.selectAllTheaterId());
		
		//영화가 상영 가능한 전체 경우의 수를 뽑기 위한 scheduleList 생성(scheduleList의 틀만 잡은 것이기 때문에 date/movie/id는 null)
		if(scheduleList.isEmpty()) {
			for(int theaterIdIdx = 0; theaterIdIdx < theaterService.selectAllTheaterInfo().size(); theaterIdIdx++) {
				TheaterVo theaterVo = (theaterService.selectAllTheaterInfo()).get(theaterIdIdx);
				for(int dateIdx = 0; dateIdx < 4; dateIdx++) {
					for(int timeIdx = 0; timeIdx < 4; timeIdx++) {
						ScheduleVo svo = new ScheduleVo();
						switch(timeIdx % 4) {
						case 0:
							time = "00:00:00";
							break;
						case 1:
							time = "06:00:00";
							break;
						case 2:
							time = "12:00:00";
							break;
						case 3:
							time = "18:00:00";
							break;
						}

						svo.setTheater_id(theaterVo.getTheater_id());
						svo.setCinema_name(theaterVo.getCinema_name());
						svo.setTheater_name(theaterVo.getTheater_name());
						svo.setSchedule_time(time);
						scheduleList.add(svo);
					}//for end
				}//for end
			}//for end		
		}//if end
		
		//현재 날짜 받아오기
		Calendar cal = Calendar.getInstance();
        cal.setTime(new Date());
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        String dateStr = "";	//날짜를 string으로 저장하기 위한 변수
        
        //scheduleList를 Temp로 복사 후 temp로 작업 - temp에 date 넣어줌
        List<ScheduleVo> scheduleListTemp = new ArrayList<ScheduleVo>(); 
        for(int i = 0; i < scheduleList.size(); i++) {
        	scheduleListTemp.add(scheduleList.get(i));
        }
        
        for(int i = 0; i < scheduleListTemp.size(); i++) {
        	switch(i % 16) {
        	case 0: case 1: case 2: case 3:
        		cal.add(Calendar.DATE, 1);
        		break;
        	case 4: case 5: case 6: case 7:
        		cal.add(Calendar.DATE, 2);
        		break;
        	case 8: case 9: case 10: case 11:
        		cal.add(Calendar.DATE, 3);
        		break;
        	case 12: case 13: case 14: case 15:
        		cal.add(Calendar.DATE, 4);
        		break;
        	}
        	dateStr = df.format(cal.getTime());
        	scheduleListTemp.get(i).setMovie_id(movieId);
        	scheduleListTemp.get(i).setSchedule_date(dateStr);
        	cal.setTime(new Date());
        }//for end
        
        //DB에 schedule 넣기
        Random rand = new Random();
        int cnt = 0;
        while(cnt < 15) {
        	if(scheduleListTemp.isEmpty()) {
        		break;
        	}
        	int randIdx = rand.nextInt(scheduleListTemp.size());
        	if(scheduleService.findOverlapSchedule(scheduleListTemp.get(randIdx))){//만약 겹치는 스케줄이 있으면 templist에서 삭제
        		scheduleListTemp.remove(randIdx);
        	}
        	else {	//겹치지 않으면 DB에 추가
        		scheduleService.insertSchedule(scheduleListTemp.get(randIdx));
        		scheduleListTemp.remove(randIdx);
        		cnt++;
        	}//if~else end
        }	//while end
	}
	
	public void deleteSchedule() {
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		Calendar cal = Calendar.getInstance();
		//현재 날짜 저장
        String nowDateStr = df.format(cal.getTime());
        //현재 시간 저장
        LocalTime nowTime = LocalTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        String nowTimeStr = nowTime.format(formatter);
        ScheduleVo now = new ScheduleVo();
        now.setSchedule_date(nowDateStr);
        now.setSchedule_time(nowTimeStr);
        
        List<Long> deleteScheduleIdList = scheduleService.getIdByDateTime(now);
        List<Long> deleteSeatIdList = new ArrayList<Long>();
        for(int i = 0; i < deleteScheduleIdList.size(); i++) {
        	deleteSeatIdList = seatService.getSeatIdBySchedule(deleteScheduleIdList.get(i));
        	
        	//seat 기준 pick 삭제
            for(int j = 0; j < deleteSeatIdList.size(); j++) {
            	pickService.deletePickBySeat(deleteSeatIdList.get(j));
            }
        }
        
        //schedule 기준 seat 삭제
        for(int i = 0; i< deleteScheduleIdList.size(); i++) {
        	seatService.deleteSeatBySchedule(deleteScheduleIdList.get(i));
        }
        
        //현재 날짜, 시간 기준 오래된 스케줄 정보 삭제
        scheduleService.deleteSchedule(now);
	}
	
	public void deleteMovie(Long movieId) {
		 //스케줄이 없으면 영화 삭제
        if(scheduleService.getScheduleByMovieId(movieId).isEmpty()) {
        	movieService.deleteMovie(movieId);
        }
	}
}


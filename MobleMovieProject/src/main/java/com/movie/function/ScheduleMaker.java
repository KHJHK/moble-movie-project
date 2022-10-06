package com.movie.function;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.movie.dao.ScheduleDao;
import com.movie.dao.TheaterDao;
import com.movie.service.ScheduleService;
import com.movie.service.TheaterService;
import com.movie.vo.ScheduleVo;

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
			for(int theaterIdIdx = 0; theaterIdIdx < theaterService.selectAllTheaterId().size(); theaterIdIdx++) {
				long theaterId = (theaterService.selectAllTheaterId()).get(theaterIdIdx);
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
						
						svo.setTheater_id(theaterId);
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
        
        System.out.println(scheduleListTemp);
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
        while(cnt < 20) {
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
}


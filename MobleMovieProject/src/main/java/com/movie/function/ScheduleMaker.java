package com.movie.function;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Random;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;

import com.movie.apiControl.JsonReader;
import com.movie.dao.ScheduleDao;
import com.movie.dao.TheaterDao;
import com.movie.service.ScheduleService;
import com.movie.service.TheaterService;
import com.movie.vo.ScheduleVo;
import com.movie.vo.TheaterVo;

import lombok.Data;

public class ScheduleMaker {
	@Autowired
	private static TheaterService theaterService;
	@Autowired
	private static TheaterDao theaterDao;
	
	@Autowired
	private static ScheduleService scheduleService;
	@Autowired
	private static ScheduleDao scheduleDao;
	
	//스캐줄표 list
	private static List<ScheduleVo> scheduleList;
	
	private static String BASE_URL = "https://api.themoviedb.org/3/movie/";
	private static String MOVIE_API_KEY = "?api_key=6ed60ba54dadef320e23f64e1cfd5b1f&language=ko-KR&region=KR";
	private static String apiUrl = "";
	
	//영화 insert시 영화 id값을 받아 스케줄을 만드는 메서드
	//상영관 id, 상영 날짜, 상영 시간이 모두 겹칠 경우 스케줄 다시 선정
	//날짜, 시간은 유동적이니 날짜와 시간은 비워둔 상태로 생성
	public static void makeSchedule(Long movieId) throws Exception {
		//난수 추출용 클래스
		Random random = new Random();
		
		//날짜 비교를 위한 기반작업
			//0. scheduleList에 넣을 date 변수, 객체 생성
		Date scheduleDate = new Date();
		String scheduleDateStr = "";
		
			//1. 오늘날짜 nowDate로 저장
		Date nowDate = new Date();
		SimpleDateFormat nowDateFormatter = new SimpleDateFormat("yyyyMMdd");
				//scheduleDate 및 scheDuleDate에 정보 저장을 위해 Calender 생성
		Calendar scheduleCal = Calendar.getInstance();	
		scheduleCal.setTime(nowDate);
		
			//2. api에서 max date 가져오기
			//Api 정보 추출 - date 추출
		apiUrl = BASE_URL + "now_playing" + MOVIE_API_KEY;
		String getJson = JsonReader.callURL(apiUrl).toString();
		JSONObject jsonMainObj = (JSONObject) new JSONParser().parse(getJson);
		JSONObject jsonSubObj = (JSONObject) jsonMainObj.get("dates");
		String maxDateStr = (String)jsonSubObj.get("maximum");	//20XX-MM-DD
		SimpleDateFormat maxDateFormatter = new SimpleDateFormat("yyyy-MM-dd");
		Date maxDate = maxDateFormatter.parse(maxDateStr);
		
			//3. Calendar 객체를 사용하여 max date에 한 달 더하기
		Calendar maxCal = Calendar.getInstance();
		maxCal.setTime(maxDate);
		maxCal.add(Calendar.MONTH, 1);
			//4. maxDateStr 및 maxDate 갱신
		maxDateStr = maxCal.get(Calendar.YEAR) + (maxCal.get(Calendar.MONTH) + 1) + maxCal.get(Calendar.DAY_OF_MONTH) + "";
		maxDate = nowDateFormatter.parse(maxDateStr);
		
		// 현재 시간        
		LocalTime nowTime = LocalTime.now();                     
		// 시간 포맷 정의하기 - 시간만 추출 - 영화는 정각에만 시작하기 때문에 시간만 추출      
		DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH");         
		// 포맷 적용하고 int로 저장
		String nowHourStr = nowTime.format(timeFormatter);
		
		
		//상영관 리스트 불러오기
		List<Long> theaterIdList = theaterService.selectAllTheaterId();
		
		//scheduleList가 비어있으면 생성
		if(scheduleList == null) {
			for(int i = 0; i < theaterIdList.size(); i+=4) {
				for(int j = 0; j < 4; j++) {
					ScheduleVo scheduleVo = new ScheduleVo();
					scheduleVo.setSchedule_id(theaterIdList.get(i+j));
					scheduleList.add(scheduleVo);
				}
			}
		}
		//## scheduleList에 날짜, 시간 입력
		for(int i = 0; i < scheduleList.size(); i++) {s
			
			//#1 날짜 정보 입력
				//scheduleDateStr 및 scheduleDate 저장
			scheduleDateStr = scheduleCal.get(Calendar.YEAR) + (maxCal.get(Calendar.MONTH) + 1) + maxCal.get(Calendar.DAY_OF_MONTH) + "";
			scheduleDate = nowDateFormatter.parse(scheduleDateStr);
				//scheduleCal 정의
			scheduleCal = Calendar.getInstance();	
			scheduleCal.setTime(scheduleDate);
				//Calendar 객체를 사용하여 scheduleCal에 하루씩 더하기(scheduleCal을 통해 scheduleList의 date를 정해줌)
			scheduleCal.add(Calendar.DATE, 1);
			
			scheduleList.get(i).setSchedule_date(nowDate.toString());
			
			
			//#2 시간 정보 입력
			int time = -1;
				//영화 상영 시간은 각 상영관마다 6시간 단위로 4번씩 상영 예정
			switch(i%4) {
			case 0:
				time = 0;
				break;
			case 1:
				time = 6;
				break;
			case 2:
				time = 12;
				break;
			case 3:
				time = 18;
				break;
			}
				//상영 시간 insert(if문으로 넣을지 말지 정해주기)
			scheduleList.get(i).setSchedule_time(Integer.toString(time));
			
			
			//check List
			System.out.println(scheduleList.get(i));
		}
		
		//db 입력용 랜덤 스캐줄 생성
		do {
			scheduleList.get(random.nextInt(scheduleList.size()));
		}while(scheduleService.findOverlapSchedule(null));
	}
}


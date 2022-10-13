package com.movie.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.dao.MovieDao;
import com.movie.dao.ScheduleDao;
import com.movie.vo.MovieVo;
import com.movie.vo.ScheduleVo;

@Service
public class TicketingService {
	@Autowired
	MovieDao movieDao;
	@Autowired
	ScheduleDao scheduleDao;
	
	
	public List<MovieVo> getMovieList(){
		return movieDao.getMovieInfo();
	}
	
	public List<String> getCinemaLocationList(String movie_id){
		return scheduleDao.getCinemaLocationByMovieId(movie_id);
	}
	
	public List<String> getCinemaNameList(String movie_id, String cinema_location){
		Map input = new HashMap<>();
		input.put("movie_id", movie_id);
		input.put("cinema_location", cinema_location);
		
		return scheduleDao.getCinemaNameByInfo(input);
	}
	
	//list<string> 날짜 출력(거의 완성)이랑 JSONArray schedul_id, time 출력 만드는중
	public List<String> getScheduleDateList(String movie_id, String cinema_name){
		Map input = new HashMap<>();
		input.put("movie_id", movie_id);
		input.put("cinema_name", cinema_name);
		
		return scheduleDao.getScheduleDateByInfo(input);
	}
	
	public List<ScheduleVo> getScheduleTimeAndTheater(String movie_id, String cinema_name, String schedule_date) {
		Map input = new HashMap<>();
		input.put("movie_id", movie_id);
		input.put("cinema_name", cinema_name);
		input.put("schedule_date", schedule_date);
		
		return scheduleDao.getScheduleTimeAndTheater(input);
	}
}

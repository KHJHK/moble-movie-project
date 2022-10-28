package com.movie.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.dao.CinemaDao;
import com.movie.dao.MovieDao;
import com.movie.dao.PickDao;
import com.movie.dao.ScheduleDao;
import com.movie.dao.SeatDao;
import com.movie.vo.CinemaVo;
import com.movie.vo.MovieVo;
import com.movie.vo.PickVo;
import com.movie.vo.ScheduleVo;
import com.movie.vo.SeatVo;

@Service
public class PickServiceImpl implements PickService{
	@Autowired
	PickDao pickDao;
	@Autowired
	SeatDao seatDao;
	@Autowired
	ScheduleDao scheduleDao;
	@Autowired
	CinemaDao cinemaDao;
	@Autowired
	MovieDao movieDao;
	
	@Override
	public int deletePickBySeat(Long seat_id) {
		return pickDao.deletePickBySeat(seat_id);
	}

	@Override
	public int insertPick(Long seat_id, Long member_id, Long schedule_id) {
		return pickDao.insertPick(seat_id, member_id, schedule_id);
	}

	@Override
	public List<PickVo> getPickByMemberId(Long member_id) {
		return pickDao.getPickByMemberId(member_id);
	}
	
	@Override
	public List<Map> getPickInfoList(Long member_id){
		List<Map> result = new ArrayList();
		String pick_id = "";
		String movie_name = "";
		String movie_poster_path = "";
		String cinema_location = "";
		String cinema_name = "";
		String theater_name = "";
		String schedule_date = "";
		String schedule_time = "";
		String seat_name = "";
		
		for(int i = 0; i < getPickByMemberId(member_id).size(); i++) {
			pick_id = getPickByMemberId(member_id).get(i).getPick_id().toString();
			SeatVo seat = seatDao.getSeatInfoById(getPickByMemberId(member_id).get(i).getSeat_id());
			seat_name = seat.getSeat_name();
			
			ScheduleVo schedule = scheduleDao.getScheduleById(seat.getSchedule_id());
			schedule_date = schedule.getSchedule_date();
			schedule_time = schedule.getSchedule_time();
			theater_name = schedule.getTheater_name();
			
			CinemaVo cinema = cinemaDao.getCinemaByName(schedule.getCinema_name());
			cinema_name = cinema.getCinema_name();
			cinema_location = cinema.getCinema_location();
			
			MovieVo movie = movieDao.findMovieById(schedule.getMovie_id());
			movie_name = movie.getMovie_name();
			movie_poster_path = movie.getMovie_poster_path();
			
			Map<String, String> insert = new HashMap<>();
			insert.put("pick_id", pick_id);
			insert.put("movie_name", movie_name);
			insert.put("movie_poster_path", movie_poster_path);
			insert.put("cinema_location", cinema_location);
			insert.put("cinema_name", cinema_name);
			insert.put("theater_name", theater_name);
			insert.put("schedule_date", schedule_date);
			insert.put("schedule_time", schedule_time);
			insert.put("seat_name", seat_name);
			
			result.add(insert);
		};
		return result;
	}

	@Override
	public int deletePick(Long pick_id) {
		return pickDao.deletePick(pick_id);
	}

	@Override
	public PickVo getPickById(Long pick_id) {
		return pickDao.getPickById(pick_id);
	}
}

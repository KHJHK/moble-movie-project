package com.movie.service;

import java.util.List;
import java.util.Map;

import org.json.simple.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.dao.ScheduleDao;
import com.movie.vo.MovieVo;
import com.movie.vo.ScheduleVo;

@Service
public class ScheduleServiceImpl implements ScheduleService{
	@Autowired
	ScheduleDao scheduleDao;

	@Override
	public boolean findOverlapSchedule(ScheduleVo scheduleVo) {
		// 중복탐색
		if(scheduleDao.findOverlapSchedule(scheduleVo) != null) {
			return true;
		}else {
			return false;			
		}
	}

	@Override
	public int insertSchedule(ScheduleVo scheduleVo) {
		return scheduleDao.insertSchedule(scheduleVo);
	}

	@Override
	public List<ScheduleVo> findScheduleByDetail(ScheduleVo scheduleVo) {
		return scheduleDao.findScheduleByDetail(scheduleVo);
	}

	@Override
	public List<String> findScheduleDate(ScheduleVo scheduleVo) {
		return scheduleDao.findScheduleDate(scheduleVo);
	}

	@Override
	public int deleteSchedule(ScheduleVo scheduleVo) {
		return scheduleDao.deleteSchedule(scheduleVo);
	}

	@Override
	public List<String> getCinemaLocationByMovieId(int movie_id) {
		return scheduleDao.getCinemaLocationByMovieId(movie_id);
	}

	@Override
	public List<String> getCinemaNameByInfo(Map info) {
		return scheduleDao.getCinemaNameByInfo(info);
	}

	@Override
	public List<String> getScheduleDateByInfo(Map info) {
		return scheduleDao.getScheduleDateByInfo(info);
	}

	@Override
	public List<ScheduleVo> getScheduleTimeAndTheater(Map info) {
		// TODO Auto-generated method stub
		return scheduleDao.getScheduleTimeAndTheater(info);
	}

	@Override
	public List<Long> getIdByDateTime(ScheduleVo scheduleVo) {
		// TODO Auto-generated method stub
		return scheduleDao.getIdByDateTime(scheduleVo);
	}

	@Override
	public List<Long> getScheduleByMovieId(Long movie_id) {
		return scheduleDao.getScheduleByMovieId(movie_id);
	}

	
}

package com.movie.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.dao.ScheduleDao;
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
}

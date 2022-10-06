package com.movie.service;

import com.movie.vo.ScheduleVo;

public interface ScheduleService {
	public boolean findOverlapSchedule(ScheduleVo scheduleVo);
	public int insertSchedule(ScheduleVo scheduleVo);
}

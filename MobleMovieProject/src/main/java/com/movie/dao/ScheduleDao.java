package com.movie.dao;

import org.apache.ibatis.annotations.Mapper;

import com.movie.vo.ScheduleVo;

@Mapper
public interface ScheduleDao {
	public ScheduleVo findOverlapSchedule(ScheduleVo scheduleVo);
}

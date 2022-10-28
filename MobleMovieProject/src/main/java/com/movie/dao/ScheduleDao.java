package com.movie.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.movie.vo.ScheduleVo;

@Mapper
public interface ScheduleDao {
	public ScheduleVo findOverlapSchedule(ScheduleVo scheduleVo);
	public List<String> findScheduleDate(ScheduleVo scheduleVo);
	public List<ScheduleVo> findScheduleByDetail(ScheduleVo scheduleVo);
	public int insertSchedule(ScheduleVo scheduleVo);
	public int deleteSchedule(ScheduleVo scheduleVo);
	public List<String> getCinemaLocationByMovieId(int movie_id);
	public List<String> getCinemaNameByInfo(Map info);
	public List<String> getScheduleDateByInfo(Map info);
	public List<ScheduleVo> getScheduleTimeAndTheater(Map info);
	public List<Long> getIdByDateTime(ScheduleVo scheduleVo);
	public List<Long> getScheduleByMovieId(Long movie_id);
	public ScheduleVo getScheduleById(@Param("schedule_id")Long schedule_id);
}

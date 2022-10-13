package com.movie.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.json.simple.JSONArray;

import com.movie.vo.ScheduleVo;

@Mapper
public interface ScheduleDao {
	public ScheduleVo findOverlapSchedule(ScheduleVo scheduleVo);
	public List<String> findScheduleDate(ScheduleVo scheduleVo);
	public List<ScheduleVo> findScheduleByDetail(ScheduleVo scheduleVo);
	public int insertSchedule(ScheduleVo scheduleVo);
	public int deleteSchedule(ScheduleVo scheduleVo);
	public List<String> getCinemaLocationByMovieId(String movie_id);
	public List<String> getCinemaNameByInfo(Map info);
	public List<String> getScheduleDateByInfo(Map info);
	public List<ScheduleVo> getScheduleTimeAndTheater(Map info);
}

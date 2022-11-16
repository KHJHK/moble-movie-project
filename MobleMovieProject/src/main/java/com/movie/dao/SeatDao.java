package com.movie.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.movie.vo.SeatVo;

@Mapper
public interface SeatDao {
	public List<SeatVo> getSeletedSeat(@Param("schedule_id")Long schedule_id);
	public int insertSeat(@Param("schedule_id")Long schedule_id, @Param("seat_name")String seat_name);
	public List<Long> getSeatIdBySchedule(@Param("schedule_id")Long schedule_id);
	public int deleteSeat(@Param("seat_id")Long seat_id);
	public int deleteSeatBySchedule(@Param("schedule_id")Long schedule_id);
	public SeatVo getSeatInfoById(@Param("seat_id")Long seat_id);
}

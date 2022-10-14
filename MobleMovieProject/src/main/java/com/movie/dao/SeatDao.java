package com.movie.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.movie.vo.SeatVo;

@Mapper
public interface SeatDao {
	public List<SeatVo> getSeletedSeat(@Param("schedule_id")int schedule_id);
}

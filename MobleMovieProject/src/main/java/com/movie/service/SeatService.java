package com.movie.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.movie.vo.SeatVo;

public interface SeatService {
	public List<SeatVo> getSeletedSeat(int schedule_id);
}

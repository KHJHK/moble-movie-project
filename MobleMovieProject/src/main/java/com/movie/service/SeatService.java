package com.movie.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.movie.vo.SeatVo;

public interface SeatService {
	public List<SeatVo> getSeletedSeat(Long schedule_id);
	public int insertSeat(Long schedule_id, String seat_name);
	public List<Long> getSeatIdBySchedule(List<Long> schedule_id_List);
	public int deleteSeat(Long schedule_id);
}

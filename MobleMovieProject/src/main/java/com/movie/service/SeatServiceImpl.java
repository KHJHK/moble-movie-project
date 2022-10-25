package com.movie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.dao.SeatDao;
import com.movie.vo.SeatVo;

@Service
public class SeatServiceImpl implements SeatService{
	@Autowired
	SeatDao seatDao;

	@Override
	public List<SeatVo> getSeletedSeat(Long schedule_id) {
		return seatDao.getSeletedSeat(schedule_id);
	}

	@Override
	public int insertSeat(Long schedule_id, Long seat_num, String seat_name) {
		return seatDao.insertSeat(schedule_id, seat_num, seat_name);
	}

	@Override
	public List<Long> getSeatIdBySchedule(List<Long> schedule_id_List) {
		return seatDao.getSeatIdBySchedule(schedule_id_List);
	}

	@Override
	public int deleteSeat(Long schedule_id) {
		return seatDao.deleteSeat(schedule_id);
	}
	
	
}

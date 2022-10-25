package com.movie.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.dao.PickDao;

@Service
public class PickServiceImpl implements PickService{
	@Autowired
	PickDao pickDao;
	
	public int deletePick(Long seat_id) {
		return pickDao.deletePick(seat_id);
	}
}

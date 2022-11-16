package com.movie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.dao.TheaterDao;
import com.movie.vo.TheaterVo;

@Service
public class TheaterServiceImpl implements TheaterService{
	@Autowired
	TheaterDao theaterDao;

	@Override
	public List<TheaterVo> selectAllTheaterInfo() {
		// theater 테이블 전체 정보 SELECT
		return theaterDao.selectAllTheaterInfo();
	}

	@Override
	public List<Long> selectAllTheaterId() {
		// theater 테이블 전체 ID SELECT
		return theaterDao.selectAllTheaterId();
	}
}

package com.movie.service;

import java.util.List;

import com.movie.vo.TheaterVo;

public interface TheaterService {
	public List<TheaterVo> selectAllTheaterInfo();
	public List<Long> selectAllTheaterId();
}

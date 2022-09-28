package com.movie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.dao.TheaterDao;
import com.movie.vo.TheaterVo;

public interface TheaterService {
	public List<TheaterVo> selectAllTheaterInfo();
	public List<Long> selectAllTheaterId();
}

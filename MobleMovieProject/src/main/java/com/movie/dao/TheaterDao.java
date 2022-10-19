package com.movie.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.movie.vo.TheaterVo;

@Mapper
public interface TheaterDao {
	public List<TheaterVo> selectAllTheaterInfo();
	public List<Long> selectAllTheaterId();
}

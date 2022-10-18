package com.movie.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.movie.vo.MovieVo;

@Mapper
public interface MovieDao {
	public List<MovieVo> getMovieInfo();
	public int insertMovie(MovieVo movieVo);
	public int deleteAllMovie();
	public MovieVo findMovieById(Long id);
}
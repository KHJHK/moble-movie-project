package com.movie.service;

import java.util.List;

import com.movie.vo.MovieVo;

public interface MovieService {
	public List<MovieVo> getMovieInfo();
	public int insertMovie(MovieVo movieVo);
	public int deleteAllMovie();
	public MovieVo findMovieById(Long id);
	public int deleteMovie(Long movie_id);
}

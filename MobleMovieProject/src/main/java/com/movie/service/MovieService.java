package com.movie.service;

import java.util.List;
import java.util.Map;

import com.movie.vo.MovieVo;

public interface MovieService {
	public List<Map> getMovieInfo();
	public int insertMovie(MovieVo movieVo);
	public int deleteAllMovie();
	public MovieVo findMovieById(Long id);
	public int deleteMovie(Long movie_id);
}

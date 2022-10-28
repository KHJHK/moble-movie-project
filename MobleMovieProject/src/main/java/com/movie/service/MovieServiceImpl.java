package com.movie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.dao.MovieDao;
import com.movie.vo.MovieVo;

@Service
public class MovieServiceImpl implements MovieService {
	@Autowired
	MovieDao movieDao;

	@Override
	public List<MovieVo> getMovieInfo() {
		// 영화 테이블 전체 SELECT
		return movieDao.getMovieInfo();
	}

	@Override
	public int insertMovie(MovieVo movieVo) {
		// 영화 INSERT
		return movieDao.insertMovie(movieVo);
	}

	@Override
	public int deleteAllMovie() {
		// 영화 테이블 전체 DELETE
		return movieDao.deleteAllMovie();
	}

	@Override
	public MovieVo findMovieById(Long id) {
		// 영화 정보 ID를 통해 SELECT
		return movieDao.findMovieById(id);
	}

	@Override
	public int deleteMovie(Long movie_id) {
		return movieDao.deleteMovie(movie_id);
	}

}

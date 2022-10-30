package com.movie.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.dao.MovieDao;
import com.movie.vo.MovieVo;

@Service
public class MovieServiceImpl implements MovieService {
	@Autowired
	MovieDao movieDao;

	@Override
	public List<Map> getMovieInfo() {
		// 영화 테이블 전체 SELECT
		List<MovieVo> movieList = movieDao.getMovieInfo();
		List<Map> result = new ArrayList();
		int movie_num = 0;
		
		for(int i = 0; i < movieList.size(); i++) {
			Map insert = new HashMap<>();
			
			movie_num = i + 1;
			
			insert.put("movie_num", movie_num);
			insert.put("movie_id", movieList.get(i).getMovie_id());
			insert.put("movie_name", movieList.get(i).getMovie_name());
			insert.put("movie_open_date", movieList.get(i).getMovie_open_date());
			insert.put("movie_overview", movieList.get(i).getMovie_overview());
			insert.put("movie_popularity", movieList.get(i).getMovie_popularity());
			insert.put("movie_poster_path", movieList.get(i).getMovie_poster_path());
			insert.put("movie_video_url", movieList.get(i).getMovie_video_url());
			
			result.add(insert);
		}
		
		return result;
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

package com.movie.vo;

import lombok.Data;

@Data
public class MovieVo {
	private Long movie_id;
	private String movie_name;
	private String movie_open_date;
	private Double movie_popularity;
	private String movie_poster_path;
}

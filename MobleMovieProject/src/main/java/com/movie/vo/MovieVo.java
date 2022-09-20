package com.movie.vo;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class MovieVo {
	private Long movie_id;
	private String movie_name;
	private Timestamp movie_open_date;
	private Integer movie_rank;
	private Integer movie_audi_cnt;
	private Integer movie_audi_acc;
}

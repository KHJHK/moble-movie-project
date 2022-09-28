package com.movie.vo;

import lombok.Data;

@Data
public class TheaterVo {
	private Long theater_id;
	private CinemaVo cinema_id;
	private CinemaVo cinema_name;
	private String theater_name;
	private Long theater_seat;
	private Long theater_price;
}

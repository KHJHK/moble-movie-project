package com.movie.vo;

import lombok.Data;

@Data
public class TheaterVo {
	private Long theater_id;
	private CinemaVo cinema_id;
	private CinemaVo cinema_name;
	private String theater_name;
	private Integer theater_seat;
	private Integer theater_price;

}

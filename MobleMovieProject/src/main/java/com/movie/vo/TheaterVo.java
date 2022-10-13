package com.movie.vo;

import lombok.Data;

@Data
public class TheaterVo {
	private Long theater_id;
	private Long cinema_id;
	private String cinema_name;
	private String theater_name;
	private Long theater_seat;
	private Long theater_price;
}

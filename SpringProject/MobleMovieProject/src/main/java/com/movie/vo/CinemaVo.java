package com.movie.vo;

import lombok.Data;

@Data
public class CinemaVo {
	private Long cinema_id;
	private Long cinema_name;
	private String cinema_location;
	private Integer cinema_theater_num;
}

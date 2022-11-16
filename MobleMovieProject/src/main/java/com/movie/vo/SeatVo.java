package com.movie.vo;

import lombok.Data;

@Data
public class SeatVo {
	private Long seat_id;
	private Long schedule_id;
	private Long seat_num;
	private String seat_name;
	private String seat_admin_block;
}

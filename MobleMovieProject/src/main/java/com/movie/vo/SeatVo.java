package com.movie.vo;

import lombok.Data;

@Data
public class SeatVo {
	private Long seat_id;
	private ScheduleVo schedule_id;
	private Integer seat_num;
	private String seat_name;
	private Integer seat_pick;
	private Integer seat_block;
}

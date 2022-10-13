package com.movie.vo;

import lombok.Data;

@Data
public class ScheduleVo {
	private Long schedule_id;
	private Long movie_id;
	private Long theater_id;
	private String cinema_name;
	private String theater_name;
	private String schedule_date;
	private String schedule_time;
	
	//Cinema와 join
	private String cinema_location;
}

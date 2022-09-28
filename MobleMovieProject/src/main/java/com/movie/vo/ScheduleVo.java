package com.movie.vo;

import java.sql.Time;
import java.sql.Timestamp;

import lombok.Data;

@Data
public class ScheduleVo {
	private Long schedule_id;
	private Long movie_id;
	private Long theater_id;
	private String schedule_date;
	private String schedule_time;
}

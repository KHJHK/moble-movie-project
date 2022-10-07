package com.movie.vo;

import java.sql.Time;
import java.sql.Timestamp;

import lombok.Data;

@Data
public class ScheduleVo {
	private Long schedule_id;
	private MovieVo movie_id;
	private TheaterVo theater_id;
	private Timestamp schedule_date;
	private Time schedule_time;
}

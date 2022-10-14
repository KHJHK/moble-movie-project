package com.movie.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.movie.service.TicketingService;
import com.movie.vo.MovieVo;
import com.movie.vo.ScheduleVo;
import com.movie.vo.SeatVo;

@RestController
@RequestMapping("ticketing")
public class TicketingController {
	@Autowired
	private TicketingService ticketingService;
	
	@GetMapping("/selectMovie")
	public List<MovieVo> selectMovie(){
		return ticketingService.getMovieList();
	}
	
	@GetMapping("/selectLocation")
	public List<Map<String, String>> selectCinemaLocation(@RequestParam("movie_id")int movie_id){
		return ticketingService.getCinemaLocationList(movie_id);
	}
	
	@GetMapping("/selectCinema")
	public List<Map<String, String>> selectScheduleName(
			@RequestParam("movie_id")int movie_id,
			@RequestParam("cinema_location")String cinema_location){
		return ticketingService.getCinemaNameList(movie_id, cinema_location);
	}
	
	@GetMapping("/selectDate")
	public List<Map<String, String>> selectScheduleDate(
			@RequestParam("movie_id")int movie_id,
			@RequestParam("cinema_name")String cinema_name){
		return ticketingService.getScheduleDateList(movie_id, cinema_name);
	}
	
	@GetMapping("/selectTime")
	public List<ScheduleVo> selectScheduleTimeAndTheater(
			@RequestParam("movie_id")int movie_id,
			@RequestParam("cinema_name")String cinema_name,
			@RequestParam("schedule_date")String schedule_date){
		return ticketingService.getScheduleTimeAndTheater(movie_id, cinema_name, schedule_date);
	}
	
	@GetMapping("/selectSeat")
	public List<SeatVo> selectSeat(@RequestParam("schedule_id")int schedule_id){
		return ticketingService.getSeatInfo(schedule_id);
	}
}

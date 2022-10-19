package com.movie.controller;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.movie.apiControl.JsonReader;
import com.movie.dao.MovieDao;
import com.movie.dao.ScheduleDao;
import com.movie.dao.TestDao;
import com.movie.function.ScheduleMaker;
import com.movie.service.CinemaService;
import com.movie.service.MovieService;
import com.movie.service.ScheduleService;
import com.movie.service.TestService;
import com.movie.vo.CinemaVo;
import com.movie.vo.MovieVo;
import com.movie.vo.ScheduleVo;
import com.movie.vo.TestVo;

@Controller
@RequestMapping(value="/")
public class MovieController {	
	@Autowired
	private CinemaService cinemaService;
	
	@Autowired
	private TestService testService;
	@Autowired
	private TestDao testDao;
	
	@Autowired
	private MovieService movieService;
	@Autowired
	private MovieDao movieDao;
	
	@Autowired
	private ScheduleService scheduleService;
	@Autowired
	private ScheduleDao scheduleDao;
	
	@Autowired
	ScheduleMaker scheduleMaker;
	
	@RequestMapping(value="/index2")
	public String index2(Model model) {
		List<CinemaVo> cinemaList = cinemaService.getCinemaInfo();
		
		System.out.println("size: " + cinemaList.size());
		
		model.addAttribute("cinemaList",cinemaList);
		return "index2";
	}
	
	//TEST
	private String BASE_URL = "https://api.themoviedb.org/3/movie/";
	private String MOVIE_API_KEY = "?api_key=6ed60ba54dadef320e23f64e1cfd5b1f&language=ko-KR&region=KR";
	private String apiUrl = "";
	
	@RequestMapping(value="/index3")
	public String index3(Model model) throws ParseException {
		apiUrl = BASE_URL + "now_playing" + MOVIE_API_KEY;
		
		// Json String 가져오기
		String getJson = JsonReader.callURL(apiUrl).toString();
		
		// Json을 OBJ로 파싱
		JSONObject jsonMainObj = (JSONObject) new JSONParser().parse(getJson);
		
		// Key = result 인 값들을 JSONArray로 저장(Json 속 Json 구조라 이와 같은 방식 사용)
		JSONArray jsonArr = (JSONArray) jsonMainObj.get("results");
		
		TestVo testVo = new TestVo();
		
		if(jsonArr.size() > 0) {
			for(int i = 0; i < jsonArr.size(); i++) {
				JSONObject jsonSubObj = (JSONObject) jsonArr.get(i);
				
				Long jsonId = (Long)jsonSubObj.get("id");
				String jsonTitle = (String)jsonSubObj.get("title");
				
				testVo.setId(jsonId);
				testVo.setTitle(jsonTitle);
				testService.insertMovie(testVo);
			}
		}
		
		//출력
		List<TestVo> testList = testService.getTest();
		model.addAttribute("testList",testList);
		return "index3";
	}


	@RequestMapping(value="/indexMovie")
	public String movieList(Model model) throws ParseException {
		apiUrl = BASE_URL + "now_playing" + MOVIE_API_KEY;
		
		// Json String 가져오기
		String getJson = JsonReader.callURL(apiUrl).toString();
		// Json을 OBJ로 파싱
		JSONObject jsonMainObj = (JSONObject) new JSONParser().parse(getJson);
		// Key = result 인 값들을 JSONArray로 저장(Json 속 Json 구조라 이와 같은 방식 사용)
		JSONArray jsonArr = (JSONArray) jsonMainObj.get("results");
		
		MovieVo movieVo = new MovieVo();
		if(jsonArr.size() > 0) {
			for(int i = 0; i < jsonArr.size(); i++) {
				JSONObject jsonSubObj = (JSONObject) jsonArr.get(i);
				
				Long jsonId = (Long)jsonSubObj.get("id");
				String jsonTitle = (String)jsonSubObj.get("title");
				String jsonDate = (String)jsonSubObj.get("release_date");
				Double jsonPopularity = (Double)jsonSubObj.get("popularity");
				String jsonPoster = (String)jsonSubObj.get("poster_path");
				
				if(movieService.findMovieById(jsonId) == null) {
					movieVo.setMovie_id(jsonId);
					movieVo.setMovie_name(jsonTitle);
					movieVo.setMovie_open_date(jsonDate);
					movieVo.setMovie_popularity(jsonPopularity);
					movieVo.setMovie_poster_path(jsonPoster);
					movieService.insertMovie(movieVo);
					scheduleMaker.makeSchedule(jsonId);
				}//if end
			}//for end
		}//if end
		
		//id로 영화 검색
		List<MovieVo> movieList = movieService.getMovieInfo();
		
		//출력
		model.addAttribute("movieList", movieList);
		return "indexMovie";
	}
	
//	@RequestMapping(value="/ticketingEx")
//	public String ticketing(Model model) {
//		List<MovieVo> movieList = movieService.getMovieInfo();
//		List<String> cinemaLocation = cinemaService.getCinemaLocation();
//		List<String> cinemaList = cinemaService.getCinemaNameByLocation(cinemaLocation.get(0));
//		
//		ScheduleVo svo = new ScheduleVo();
//		svo.setMovie_id(movieList.get(10).getMovie_id());
//		svo.setCinema_name(cinemaList.get(0));
//		List<String> scheduleDate = scheduleService.findScheduleDate(svo);
//		
//		svo.setSchedule_date(scheduleDate.get(0));
//		List<ScheduleVo> scheduleList = scheduleService.findScheduleByDetail(svo);
//		
//		model.addAttribute("movieList", movieList);	
//		model.addAttribute("cinemaLocation", cinemaLocation);
//		model.addAttribute("cinemaList", cinemaList);
//		model.addAttribute("scheduleDate", scheduleDate);
//		model.addAttribute("scheduleList", scheduleList);
//		return "ticketing";
//	}
	@GetMapping(value="/ticketingEx")
	public String ticketing(Model model) {
		List<MovieVo> movieList = movieService.getMovieInfo();
		List<String> cinemaLocation = cinemaService.getCinemaLocation();
		List<String> cinemaList = cinemaService.getCinemaNameByLocation(cinemaLocation.get(0));
		
		ScheduleVo svo = new ScheduleVo();
		svo.setMovie_id(movieList.get(10).getMovie_id());
		svo.setCinema_name(cinemaList.get(0));
		List<String> scheduleDate = scheduleService.findScheduleDate(svo);
		
		svo.setSchedule_date(scheduleDate.get(0));
		List<ScheduleVo> scheduleList = scheduleService.findScheduleByDetail(svo);
		
		model.addAttribute("movieList", movieList);	
		model.addAttribute("cinemaLocation", cinemaLocation);
		model.addAttribute("cinemaList", cinemaList);
		model.addAttribute("scheduleDate", scheduleDate);
		model.addAttribute("scheduleList", scheduleList);
		return "ticketing";
	}
	
	@PostMapping(value="/ticketingEx")
	public String ticketing2(Model model, @RequestParam("movie_id")String movie_id){
		List<MovieVo> movieList = movieService.getMovieInfo();
		List<String> cinemaLocation = cinemaService.getCinemaLocation();
		List<String> cinemaList = cinemaService.getCinemaNameByLocation(cinemaLocation.get(0));
		
		ScheduleVo svo = new ScheduleVo();
		svo.setMovie_id(movieList.get(10).getMovie_id());
		svo.setCinema_name(cinemaList.get(0));
		List<String> scheduleDate = scheduleService.findScheduleDate(svo);
		
		svo.setSchedule_date(scheduleDate.get(0));
		List<ScheduleVo> scheduleList = scheduleService.findScheduleByDetail(svo);
		
		model.addAttribute("movieList", movieList);	
		model.addAttribute("cinemaLocation", cinemaLocation);
		model.addAttribute("cinemaList", cinemaList);
		model.addAttribute("scheduleDate", scheduleDate);
		model.addAttribute("scheduleList", scheduleList);
		return "ticketing";
	}
	
	@ResponseBody
	@RequestMapping(value="/ticketingEx2")
	public List<MovieVo> ticketing3(Model model) throws ParseException {
		List<MovieVo> movieList = movieService.getMovieInfo();
		List<String> cinemaLocation = cinemaService.getCinemaLocation();
		List<String> cinemaList = cinemaService.getCinemaNameByLocation(cinemaLocation.get(0));
		
		ScheduleVo svo = new ScheduleVo();
		svo.setMovie_id(movieList.get(10).getMovie_id());
		svo.setCinema_name(cinemaList.get(0));
		List<String> scheduleDate = scheduleService.findScheduleDate(svo);
		
		svo.setSchedule_date(scheduleDate.get(0));
		List<ScheduleVo> scheduleList = scheduleService.findScheduleByDetail(svo);
		
		model.addAttribute("movieList", movieList);	
		model.addAttribute("cinemaLocation", cinemaLocation);
		model.addAttribute("cinemaList", cinemaList);
		model.addAttribute("scheduleDate", scheduleDate);
		model.addAttribute("scheduleList", scheduleList);
		
		return movieList;
	}
}

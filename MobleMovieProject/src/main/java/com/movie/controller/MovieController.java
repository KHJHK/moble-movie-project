package com.movie.controller;

import java.util.List;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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
import com.movie.vo.MovieVo;

@Controller
@RequestMapping(value="/movie")
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
	
	private String BASE_URL = "https://api.themoviedb.org/3/movie/";
	private String MOVIE_API_KEY = "?api_key=6ed60ba54dadef320e23f64e1cfd5b1f&language=ko-KR&region=KR";
	private String apiUrl = "";

	
	
	
	@ResponseBody
	@GetMapping("/showAll")
	public List<Map> showAllMovies(){
		return movieService.getMovieInfo();
	}

	//신규 영화 추가 및 영화 스케줄 제작
	//한번 돌리면 한참 걸리니까 실행시 주의
	@ResponseBody
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
		scheduleMaker.deleteSchedule();
		if(jsonArr.size() > 0) {
			for(int i = 0; i < jsonArr.size(); i++) {
				JSONObject jsonSubObj = (JSONObject) jsonArr.get(i);
				
				Double jsonPopularity = 0.0;
				Long jsonId = (Long)jsonSubObj.get("id");
				String jsonTitle = (String)jsonSubObj.get("title");
				String jsonDate = (String)jsonSubObj.get("release_date");
				String jsonPoster = (String)jsonSubObj.get("poster_path");
				String jsonOverview = (String)jsonSubObj.get("overview");
				
				if(jsonSubObj.get("vote_average").getClass().getName().equals("java.lang.Long")) {
					jsonPopularity = ((Long)jsonSubObj.get("vote_average")).doubleValue();
				}
				else {
					jsonPopularity = (Double)jsonSubObj.get("vote_average");
				}
				
				if(movieService.findMovieById(jsonId) == null) {
					movieVo.setMovie_id(jsonId);
					movieVo.setMovie_name(jsonTitle);
					movieVo.setMovie_open_date(jsonDate);
					movieVo.setMovie_popularity(jsonPopularity);
					movieVo.setMovie_poster_path(jsonPoster);
					movieVo.setMovie_overview(jsonOverview);
					movieService.insertMovie(movieVo);
				}//if end
				scheduleMaker.makeSchedule(jsonId);
				scheduleMaker.deleteMovie(jsonId);
			}//for end
		}//if end

		return "Movie/Schedule inserted and deleted";
	}
}

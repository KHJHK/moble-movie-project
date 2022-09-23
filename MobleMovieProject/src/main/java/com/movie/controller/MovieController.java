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
import org.springframework.web.bind.annotation.RequestMapping;

import com.movie.apiControl.JsonReader;
import com.movie.dao.TestDao;
import com.movie.service.CinemaService;
import com.movie.service.TestService;
import com.movie.vo.CinemaVo;
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
	
	@RequestMapping(value="/index2")
	public String index2(Model model) {
		List<CinemaVo> cinemaList = cinemaService.getCinemaInfo();
		
		System.out.println("size: " + cinemaList.size());
		
		model.addAttribute("cinemaList",cinemaList);
		return "index2";
	}
	
	//TEST
	private String BASE_URL = "https://api.themoviedb.org/3/movie/";
	private String MOVIE_API_KEY = "?api_key=6ed60ba54dadef320e23f64e1cfd5b1f&language=ko-KR";
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
				String jsonTitle = (String)jsonSubObj.get("original_title");
				
				testVo.setId(jsonId);
				testVo.setTitle("jsonTitle");
				testService.insertMovie(testVo);
				System.out.println(jsonId + jsonTitle);
				
//				testDao.insertMovie();
			}
		}
		
		//출력
		List<TestVo> testList = testService.getTest();
		model.addAttribute("testList",testList);
		return "index3";
	}
	//TEST
}

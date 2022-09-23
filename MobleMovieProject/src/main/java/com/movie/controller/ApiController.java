package com.movie.controller;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie.apiControl.JsonReader;

@RestController
public class ApiController {
	String BASE_URL = "https://api.themoviedb.org/3/movie/";
	String MOVIE_API_KEY = "?api_key=6ed60ba54dadef320e23f64e1cfd5b1f&language=ko-KR";
	String apiUrl = "";
	
	@GetMapping("/info")
	public String movieInfo() throws ParseException {
		String result = "";
		apiUrl = BASE_URL + "now_playing" + MOVIE_API_KEY;
		
		// Json String 가져오기
		String getJson = JsonReader.callURL(apiUrl).toString();
		
		// Json을 OBJ로 파싱
		//안드(Data) - JSON -> 서버
		JSONObject jsonMainObj = (JSONObject) new JSONParser().parse(getJson);
		
		// Key = result 인 값들을 JSONArray로 저장(Json 속 Json 구조라 이와 같은 방식 사용)
		JSONArray jsonArr = (JSONArray) jsonMainObj.get("results");
		
		if(jsonArr.size() > 0) {
			for(int i = 0; i < jsonArr.size(); i++) {
				JSONObject jsonSubObj = (JSONObject) jsonArr.get(i);
				result += jsonSubObj.get("id").toString() +"&nbsp&nbsp"+(String)jsonSubObj.get("title") + "<br>";
			}
		}
		
		return result;
	}
	
	@GetMapping("/info2")
	public String movieInfo2() {
		String result = "";
		apiUrl = BASE_URL + "now_playing" + MOVIE_API_KEY;
		
		// Json String 가져오기
		String getJson = JsonReader.callURL(apiUrl).toString();
		return getJson;
	}
}

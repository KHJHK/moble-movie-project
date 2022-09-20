package com.movie.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.movie.service.CinemaService;
import com.movie.vo.CinemaVo;

@Controller
@RequestMapping(value="/")
public class MovieController {
	@Autowired
	private CinemaService cinemaService;
	
	@RequestMapping(value="/index2")
	public String index(Model model) {
		
		List<CinemaVo> cinemaList = cinemaService.getCinemaInfo();
		
		System.out.println("size: " + cinemaList.size());
		
		model.addAttribute("cinemaList",cinemaList);
		return "index2";
	}
}

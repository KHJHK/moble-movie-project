//DAO를 통해 가져온 함수 사용(인터페이스)

package com.movie.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.movie.vo.CinemaVo;

public interface CinemaService {
	public List<CinemaVo> getCinemaInfo();
	public List<String> getCinemaLocation();
	public List<String> getCinemaNameByLocation(String location);
	public CinemaVo getCinemaById(String cinema_name);//이름으로 수정
	
	
}

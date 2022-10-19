//DAO - 쿼리문을 가져와서 함수로 구현하는 부분

package com.movie.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.movie.vo.CinemaVo;

@Mapper
public interface CinemaDao {
	public List<CinemaVo> getCinemaInfo();
	public List<String> getCinemaLocation();
	public List<String> getCinemaNameByLocation(String location);
}
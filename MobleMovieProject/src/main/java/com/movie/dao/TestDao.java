package com.movie.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.movie.vo.TestVo;

@Mapper
public interface TestDao {
	public List<TestVo> getTest();
	public int insertMovie(TestVo testVo);
}
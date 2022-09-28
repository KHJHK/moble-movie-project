package com.movie.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.movie.vo.TestVo;

@Mapper
public interface TestDao {
	public List<TestVo> getTest();
	public int insertMovie(TestVo testVo);
}
package com.movie.service;

import java.util.List;

import com.movie.vo.TestVo;

public interface TestService {
	public List<TestVo> getTest();
	public int insertMovie(TestVo testVo);
}
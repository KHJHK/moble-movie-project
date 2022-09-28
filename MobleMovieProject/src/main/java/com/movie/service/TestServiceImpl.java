//DAO를 통해 가져온 함수 사용(클래스 - 실제 구현 부분)
package com.movie.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.dao.TestDao;
import com.movie.vo.TestVo;

@Service
public class TestServiceImpl implements TestService {
	@Autowired
	TestDao testDao;

	@Override
	public List<TestVo> getTest() {
		// TODO Auto-generated method stub
		return testDao.getTest();
	}

	@Override
	public int insertMovie(TestVo testVo) {
		// TODO Auto-generated method stub
		return testDao.insertMovie(testVo);
	}

}

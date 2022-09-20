//DAO를 통해 가져온 함수 사용(클래스 - 실제 구현 부분)
package com.movie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.dao.CinemaDao;
import com.movie.vo.CinemaVo;

@Service
public class CinemaServiceImpl implements CinemaService {
	@Autowired
	CinemaDao cinemaDao;

	@Override
	public List<CinemaVo> getCinemaInfo() {
		// TODO Auto-generated method stub
		return cinemaDao.getCinemaInfo();
	}

}

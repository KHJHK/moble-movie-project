//DAO를 통해 가져온 함수 사용(인터페이스)

package com.movie.service;

import java.util.List;

import com.movie.vo.CinemaVo;

public interface CinemaService {
	public List<CinemaVo> getCinemaInfo();
}

package com.movie.service;

import java.util.List;
import java.util.Map;

import com.movie.vo.PickVo;

public interface PickService {
	public int deletePick(Long seat_id);
	public int insertPick(Long seat_id, Long member_id);
	public List<PickVo> getPickByMemberId(Long member_id);
	public List<Map> getPickInfoList(Long member_id);
}

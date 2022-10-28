package com.movie.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.movie.vo.PickVo;

public interface PickService {
	public int deletePick(Long pick_id);
	public int deletePickBySeat(Long seat_id);
	public int insertPick(Long seat_id, Long member_id);
	public List<PickVo> getPickByMemberId(Long member_id);
	public List<Map> getPickInfoList(Long member_id);
	public PickVo getPickById(Long pick_id);
}

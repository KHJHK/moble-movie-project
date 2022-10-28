package com.movie.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.movie.vo.PickVo;

@Mapper
public interface PickDao {
	public int deletePick(@Param("seat_id")Long seat_id);
	public int insertPick(@Param("seat_id")Long seat_id, @Param("member_id")Long member_id);
	public List<PickVo> getPickByMemberId(@Param("member_id")Long member_id);
}

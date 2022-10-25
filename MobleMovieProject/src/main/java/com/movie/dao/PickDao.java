package com.movie.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface PickDao {
	public int deletePick(@Param("seat_id")Long seat_id);
}

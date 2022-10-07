package com.movie.dao;

import org.apache.ibatis.annotations.Mapper;

import com.movie.vo.NoticeVo;

@Mapper
public interface BoardDao {
	
	//공지사항
	public NoticeVo NoticeList();

}

package com.movie.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.movie.vo.MemberVo;

@Mapper
public interface ManageDao {
	//관리자 리스트
	public List<MemberVo> AdminList(@Param("member_auth")String member_auth);
	//회원 리스트
	public List<MemberVo> UserList(@Param("member_auth")String member_auth);
	//탈퇴 회원 리스트
	public List<MemberVo> ResignList(@Param("member_auth")String member_auth);
	
	//강제 탈퇴
	public int DeleteMember(@Param("member_auth")String member_auth,
							@Param("member_modify_date")String member_modify_date,
							@Param("member_account")String member_account,
							@Param("member_email")String member_email);
}

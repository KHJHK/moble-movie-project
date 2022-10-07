package com.movie.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.movie.vo.MemberVo;

@Mapper
public interface MemberDao {
	//회원가입
	public void signup(MemberVo memberVo);
	//로그인
	public MemberVo login(String member_account);
	//회원정보 수정
	public int UpdateMember(@Param("member_pw")String member_pw,
							@Param("member_email")String member_email,
							@Param("member_nickname")String member_nickname,
							@Param("member_modify_date")String member_modify_date,
							@Param("member_account")String member_account);
	//회원탈퇴
	public int DeleteMember(@Param("member_auth")String member_auth,
							@Param("member_modify_date")String member_modify_date,
							@Param("member_account")String member_account);
	//아이디찾기
	public MemberVo findID(@Param("member_name")String member_name,
						   @Param("member_email")String member_email);
	//비밀번호 찾기전 인증번호
	public int CreateCode(@Param("member_code")int member_code,
						  @Param("member_account")String memeber_account,
						  @Param("member_name")String member_name,
						  @Param("member_email")String member_email);
	//비밀번호 재설정
	public int resetPW(@Param("member_pw")String member_pw,
					   @Param("member_email")String member_email,
					   @Param("member_code")int member_code);
	
	
}

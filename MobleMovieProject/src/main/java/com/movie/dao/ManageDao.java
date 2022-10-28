package com.movie.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.movie.vo.AnswerVo;
import com.movie.vo.MemberVo;
import com.movie.vo.NoticeVo;
import com.movie.vo.QuestionVo;

@Mapper
public interface ManageDao {
	
	//관리자
	public MemberVo manageMain(@Param("member_account")String member_account);
	
	//회원
	//관리자 리스트
	public List<MemberVo> adminList(@Param("member_auth")String member_auth);
	//회원 리스트
	public List<MemberVo> userList(@Param("member_auth")String member_auth);
	//탈퇴 회원 리스트
	public List<MemberVo> resignList(@Param("member_auth")String member_auth);
	//강제 탈퇴
	public int deleteMember(@Param("member_auth")String member_auth,
							@Param("member_modify_date")String member_modify_date,
							@Param("member_id")Long member_id,
							@Param("member_email")String member_email);
	
	//게시판
	//공지사항 관리자 리스트
	public List<NoticeVo> manageNoticeList(@Param("notice_flag")String notice_flag);
	//공지사항 관리자 상세보기
	public NoticeVo manageNoticeView(@Param("notice_id")Long notice_id);
	//공지사항 관리자 추가
	public void manageNoticeAdd(@Param("member_id")Long member_id,@Param("category_id")Long category_id,
			@Param("notice_reg_date")String notice_reg_date,@Param("notice_title")String notice_title,
			@Param("notice_content")String notice_content);
	//공지사항 관리자 수정
	public int manageNoticeUpdate(@Param("notice_id")Long notice_id,@Param("category_id")Long category_id,
			@Param("notice_title")String notice_title,@Param("notice_content")String notice_content);
	//공지사항 관리자 삭제
	public int manageNoticeDelete(@Param("notice_id")Long notice_id);
	
	//Q & A 관리자 리스트
	public List<QuestionVo> manageQuestionList(@Param("question_flag")String question_flag);
	//Q & A 관리자 상세보기
	public QuestionVo manageQuestionView(@Param("question_id")Long question_id);
	//Q & A 질문삭제
	public int manageQuestionDelete(@Param("question_id")Long question_id);
	//Q & A 답변 내용
	public AnswerVo manageAnswerView(@Param("question_id")Long question_id);
	//Q & A 답변 추가
	public void manageAnswerAdd(@Param("question_id")Long question_id,@Param("member_id")Long member_id,
			@Param("answer_reg_date")String answer_reg_date,@Param("answer_title")String answer_title,
			@Param("answer_content")String answer_content);
	//Q & A 답변 수정
	public int manageAnswerUpdate(@Param("answer_id")Long answer_id,@Param("answer_title")String answer_title,
			@Param("answer_content")String answer_content);
	//Q & A 답변 삭제
	public int manageAnswerDelete(@Param("answer_id")Long answer_id);
}

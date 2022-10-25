package com.movie.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.movie.vo.AnswerVo;
import com.movie.vo.NoticeVo;
import com.movie.vo.QuestionVo;

@Mapper
public interface BoardDao {
	
	//공지사항 리스트
	public List<NoticeVo> noticeList();
	
	//공지사항 세부내용
	public NoticeVo noticeView(@Param("notice_id")Long notice_id);
	
	//공지사항 조회수 증가
	public int countView(@Param("notice_id")Long notice_id);
	
	
	//Q&A 리스트
	public List<QuestionVo> questionList();
	
	//Q&A 세부내용
	public QuestionVo questionView(@Param("question_id")Long question_id);
	
	//Q&A 질문 작성
	public void questionAdd(@Param("member_id")Long member_id,@Param("category_id")Long category_id,
			@Param("question_reg_date")String question_reg_date,@Param("question_title")String question_title,
			@Param("question_content")String question_content);
	
	//Q&A 질문 수정
	public int questionUpdate(@Param("member_id")Long member_id,@Param("question_id")Long question_id,@Param("category_id")Long category_id,
			@Param("question_title")String question_title,@Param("question_content")String question_content);
	
	//Q&A 질문 삭제
	public int questionDelete(@Param("member_id")Long member_id,@Param("question_id")Long question_id);
	
	//Q&A 답변
	public AnswerVo answerView(@Param("question_id")Long question_id);

}

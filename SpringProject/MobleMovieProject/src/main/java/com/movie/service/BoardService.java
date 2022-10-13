package com.movie.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.movie.dao.BoardDao;
import com.movie.vo.AnswerVo;
import com.movie.vo.NoticeVo;
import com.movie.vo.QuestionVo;

@Service
public class BoardService {
	@Autowired
	BoardDao boardDao;
	
	SimpleDateFormat format = new SimpleDateFormat ( "yyyy-MM-dd HH:mm:sss");
    Date time = new Date();
    String localTime = format.format(time);

	//공지사항 리스트
	@Transactional
	public List<NoticeVo> NoticeList(){
		return boardDao.NoticeList();
	}
	
	//공지사항 세부내용
	@Transactional
	public NoticeVo NoticeView(Long notice_id) {
		NoticeVo noticeVo = boardDao.NoticeView(notice_id);
		return noticeVo;
	}
	
	//공지사항 조회수 증가
	@Transactional
	public int CountView(Long notice_id) {
		return boardDao.CountView(notice_id);
	}
	
	
	//Q & A 리스트
	@Transactional
	public List<QuestionVo> QuestionList(){
		return boardDao.QuestionList();
	}
	
	//Q & A 세부 내용
	@Transactional
	public QuestionVo QuestionView(Long question_id) {
		QuestionVo questionVo = boardDao.QuestionView(question_id);
		return questionVo;
	}
	
	//Q & A 질문 추가
	@Transactional
	public void QuestionAdd(Long member_id,Long category_id,String question_title,String question_content) {
		boardDao.QuestionAdd(member_id, category_id, localTime, question_title, question_content);
	}
	
	//Q & A 질문 수정
	@Transactional
	public int QuestionUpdate(Long member_id,Long question_id,Long category_id,String question_title,String question_content) {
		return boardDao.QuestionUpdate(member_id,question_id, category_id, question_title, question_content);
	}
	
	//Q & A 질문 삭제
	@Transactional
	public int QuestionDelete(Long member_id,Long question_id) {
		return boardDao.QuestionDelete(member_id,question_id);
	}
	
	//Q & A 답변
	@Transactional
	public AnswerVo AnswerView(Long question_id) {
		AnswerVo answerVo = boardDao.AnswerView(question_id);
		return answerVo;
	}
}

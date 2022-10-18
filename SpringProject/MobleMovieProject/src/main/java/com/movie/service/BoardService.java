package com.movie.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
	public List<Map<String, Object>> noticeList(){
		List<NoticeVo> noticeVoList = boardDao.noticeList();
		List<Map<String, Object>> output = new ArrayList<Map<String, Object>>();
		for(int i = 0; i < noticeVoList.size(); i++) {
			Map input = new HashMap<>();
			input.put("notice_id", noticeVoList.get(i).getNotice_id());
			input.put("category_name", noticeVoList.get(i).getCategory_name());
			input.put("notice_reg_date", noticeVoList.get(i).getNotice_reg_date());
			input.put("notice_title", noticeVoList.get(i).getNotice_title());
			input.put("notice_count", noticeVoList.get(i).getNotice_count());
			output.add(input);
		}
		return output;			
	}
	
	//공지사항 세부내용
	@Transactional	
	public Map noticeDetail(Long notice_id){
		NoticeVo noticeVo = boardDao.noticeView(notice_id);
		Map input = new HashMap<>();
		input.put("notice_title", noticeVo.getNotice_title());
		input.put("category_name", noticeVo.getCategory_name());
		input.put("member_nickname", noticeVo.getMember_nickname());
		input.put("notice_reg_date", noticeVo.getNotice_reg_date());
		input.put("notice_count", noticeVo.getNotice_count());
		input.put("notice_content", noticeVo.getNotice_content());
		return input;
	}
	
	//공지사항 조회수 증가
	@Transactional
	public int countView(Long notice_id) {
		return boardDao.countView(notice_id);
	}
	
	
	//Q & A 리스트
	@Transactional
	public List<Map<String, Object>> questionList(){
		List<QuestionVo> questionVoList = boardDao.questionList();
		List<Map<String, Object>> output = new ArrayList<Map<String, Object>>();
		for(int i = 0; i < questionVoList.size(); i++) {
			Map input = new HashMap<>();
			input.put("question_id", questionVoList.get(i).getQuestion_id());
			input.put("member_account", questionVoList.get(i).getMember_account());
			input.put("category_name", questionVoList.get(i).getCategory_name());
			input.put("question_reg_date", questionVoList.get(i).getQuestion_reg_date());
			input.put("question_title", questionVoList.get(i).getQuestion_title());
			output.add(input);
		}
		return output;			
	}
	
	//Q & A 질문 세부 내용
	@Transactional	
	public Map questionView(Long question_id){
		QuestionVo questionVo = boardDao.questionView(question_id);
		Map input = new HashMap<>();
		input.put("question_id", questionVo.getQuestion_id());
		input.put("question_title", questionVo.getQuestion_title());
		input.put("category_name", questionVo.getCategory_name());
		input.put("member_account", questionVo.getMember_account());
		input.put("question_reg_date", questionVo.getQuestion_reg_date());
		input.put("question_content", questionVo.getQuestion_content());
		return input;
	}
	
	//Q & A 질문 추가
	@Transactional
	public void questionAdd(Long member_id,Long category_id,String question_title,String question_content) {
		boardDao.questionAdd(member_id, category_id, localTime, question_title, question_content);
	}
	
	//Q & A 질문 수정
	@Transactional
	public int questionUpdate(Long member_id,Long question_id,Long category_id,String question_title,String question_content) {
		return boardDao.questionUpdate(member_id,question_id, category_id, question_title, question_content);
	}
	
	//Q & A 질문 삭제
	@Transactional
	public int questionDelete(Long member_id,Long question_id) {
		return boardDao.questionDelete(member_id,question_id);
	}
	
	//Q & A 답변	
	@Transactional
	public Map answerView(Long question_id) {
		AnswerVo answerVo = boardDao.answerView(question_id);
		Map input = new HashMap<>();
		input.put("answer_title",answerVo.getAnswer_title());
		input.put("member_nickname",answerVo.getMember_nickname());
		input.put("answer_reg_date",answerVo.getAnswer_reg_date());
		input.put("answer_content",answerVo.getAnswer_content());
		return input;
	}
	
}

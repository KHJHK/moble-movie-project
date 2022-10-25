package com.movie.controller;

import java.awt.print.Printable;
import java.nio.channels.GatheringByteChannel;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.movie.service.BoardService;
import com.movie.vo.AnswerVo;
import com.movie.vo.MemberVo;
import com.movie.vo.NoticeVo;
import com.movie.vo.QuestionVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("board")
public class BoardController {
	@Autowired
	private BoardService boardService;
	
	//공지사항 리스트
	@GetMapping("/notice")
	public List<Map<String, Object>> noticeList(){
		return boardService.noticeList();
	}
	
	//공지사항 세부내용
	@GetMapping("/notice_detail")
	public Map noticeDetail(@RequestParam("id")Long notice_id){
		boardService.countView(notice_id); //조회 수
		Map input = boardService.noticeDetail(notice_id);
		return input;
	}

	
	//Q & A 리스트
	@GetMapping("/question_list")
	public List<Map<String,Object>> questionList() {
		return boardService.questionList();
	}
	
	//Q & A 세부내용
	@GetMapping("/question_detail")
	public Map questionDetail(@RequestParam("id")Long question_id) {
		Map input = boardService.questionView(question_id);
		return input;
	}
	//답변
	@GetMapping("/answer_detail")
	public Map answerDetail(@RequestParam("id")Long question_id) {
		Map input = boardService.answerView(question_id);
		return input;
	}
	
	
	
//	public String QandADetailForm(Model model, QuestionVo questionVo ,@RequestParam("id")Long question_id) {
//		questionVo = boardService.QuestionView(question_id); 
//		model.addAttribute("question_id",questionVo.getQuestion_id());
//		model.addAttribute("title", questionVo.getQuestion_title());
//		model.addAttribute("category", questionVo.getCategory_name());
//		model.addAttribute("account", questionVo.getMember_account());
//		model.addAttribute("reg_date", questionVo.getQuestion_reg_date());
//		model.addAttribute("content", questionVo.getQuestion_content());
//		AnswerVo answerVo = boardService.AnswerView(question_id);
//		if(answerVo == null) {
//			model.addAttribute("msg", "아직 답변이 없습니다.");
//			return "board/QandA_detail";
//		}else {
//		model.addAttribute("answer_title", answerVo.getAnswer_title());
//		model.addAttribute("member_nickname", answerVo.getMember_nickname());
//		model.addAttribute("answer_reg_date", answerVo.getAnswer_reg_date());
//		model.addAttribute("answer_content", answerVo.getAnswer_content());
//		return "board/QandA_detail";
//		}
//	}
	
	//Q & A 질문 추가
	@PostMapping("/question_add")
	public String questionAdd(Authentication a,@RequestParam("category_id")Long category_id,
			@RequestParam("question_title")String question_title,@RequestParam("question_content")String question_content) {
		MemberVo memberVo = (MemberVo)a.getPrincipal();
		boardService.questionAdd(memberVo.getMember_id(), category_id, question_title, question_content);
		return "질문 작성 완료";
	}
	
	//Q & A 질문 수정
//	@GetMapping("/question_update")
//	public String questionUpdate(Model model,@RequestParam("id")Long question_id) {
//		QuestionVo questionVo = (QuestionVo) boardService.questionView(question_id);
//		model.addAttribute("question_id", question_id);
//		model.addAttribute("category", "기존 카테고리 : " + questionVo.getCategory_name());
//		model.addAttribute("title", "기존 질문 제목 : " + questionVo.getQuestion_title());
//		model.addAttribute("content","기존 질문 내용 : " + questionVo.getQuestion_content());
//		return "board/QandA_update";
//	}
	@GetMapping("/question_update")
	public String questionUpdate(Authentication a,@RequestParam("id")Long question_id,@RequestParam("category_id")Long category_id,
			@RequestParam("question_title")String question_title,@RequestParam("question_content")String question_content) {
		MemberVo memberVo = (MemberVo)a.getPrincipal();
		int result = boardService.questionUpdate(memberVo.getMember_id(),question_id, category_id, question_title, question_content);
		if(result == 1) {
		return "수정 성공";
		}else {
			return "수정 권한이 없습니다.";
		}
	}
	
	//Q & A 질문 삭제
	@GetMapping("/question_delete")
	public String questionDelete(Authentication a ,@RequestParam("id")Long question_id) {
		MemberVo memberVo = (MemberVo)a.getPrincipal();
		int result = boardService.questionDelete(memberVo.getMember_id(),question_id);
		if(result == 1) {
			return "삭제 성공";
		}else {
			return "삭제 권한이 없습니다.";
		}
	}
	
}

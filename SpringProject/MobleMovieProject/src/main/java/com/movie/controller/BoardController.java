package com.movie.controller;

import java.awt.print.Printable;
import java.nio.channels.GatheringByteChannel;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.movie.service.BoardService;
import com.movie.vo.AnswerVo;
import com.movie.vo.MemberVo;
import com.movie.vo.NoticeVo;
import com.movie.vo.QuestionVo;

@Controller
public class BoardController {
	@Autowired
	private BoardService boardService;
	
	//공지사항 리스트
	@GetMapping("/board/notice")
	public String noticeForm(Model model) {
		List<NoticeVo> noticeList = boardService.NoticeList();
		model.addAttribute("noticeList", noticeList);
		return "board/notice";
	}
	@PostMapping("/board/notice")
	public String notice() {
		return "board/notice";
	}
	
	//공지사항 세부내용
	@GetMapping("/board/notice_detail")
	public String noticeDetailForm(Model model, NoticeVo noticeVo ,@RequestParam("id")Long notice_id) {
		boardService.CountView(notice_id);  //조회수 증가
		noticeVo = boardService.NoticeView(notice_id);
		model.addAttribute("title", noticeVo.getNotice_title());
		model.addAttribute("category", noticeVo.getCategory_name());
		model.addAttribute("nickname", noticeVo.getMember_nickname());
		model.addAttribute("reg_date", noticeVo.getNotice_reg_date());
		model.addAttribute("count", noticeVo.getNotice_count());
		model.addAttribute("content", noticeVo.getNotice_content());
		return "board/notice_detail";
	}
	@PostMapping("/board/notice_detail")
	public String noticeDetail() {
		return "board/notice_detail";
	}
	
	//Q & A 리스트
	@GetMapping("/board/QandA")
	public String QandAForm(Model model) {
		List<QuestionVo> questionList = boardService.QuestionList();
		model.addAttribute("questionList", questionList);
		return "board/QandA";
	}
	@PostMapping("/board/QandA")
	public String QandA() {
		return "board/QandA";
	}
	
	//Q & A 세부내용
	@GetMapping("/board/QandA_detail")
	public String QandADetailForm(Model model, QuestionVo questionVo ,AnswerVo answerVo,@RequestParam("id")Long question_id) {
		questionVo = boardService.QuestionView(question_id);
		model.addAttribute("question_id",questionVo.getQuestion_id());
		model.addAttribute("title", questionVo.getQuestion_title());
		model.addAttribute("category", questionVo.getCategory_name());
		model.addAttribute("account", questionVo.getMember_account());
		model.addAttribute("reg_date", questionVo.getQuestion_reg_date());
		model.addAttribute("content", questionVo.getQuestion_content());
		if(answerVo == null) {

			return "board/QandA_detail";
		}else {
		answerVo = boardService.AnswerView(question_id);
		model.addAttribute("answer_title", answerVo.getAnswer_title());
		model.addAttribute("member_nickname", answerVo.getMember_nickname());
		model.addAttribute("answer_reg_date", answerVo.getAnswer_reg_date());
		model.addAttribute("answer_content", answerVo.getAnswer_content());
		return "board/QandA_detail";
		}
	}
	@PostMapping("/board/QandAS_detail")
	public String QandADetail() {
		return "board/QandA_detail";
	}
	
	//Q & A 질문 추가
	@GetMapping("/board/QandA_add")
	public String QandAaddForm() {
		return "board/QandA_add";
	}
	@PostMapping("/board/QandA_add")
	public String QandAadd(Authentication a,@RequestParam("category_id")Long category_id,
			@RequestParam("question_title")String question_title,@RequestParam("question_content")String question_content) {
		MemberVo memberVo = (MemberVo)a.getPrincipal();
		boardService.QuestionAdd(memberVo.getMember_id(), category_id, question_title, question_content);
		return "redirect:/board/QandA";
	}
	
	//Q & A 질문 수정
	@GetMapping("/board/QandA_update")
	public String QandAUpdateForm(Model model,@RequestParam("question_id")Long question_id) {
		QuestionVo questionVo = boardService.QuestionView(question_id);
		model.addAttribute("question_id", question_id);
		model.addAttribute("category", "기존 카테고리 : " + questionVo.getCategory_name());
		model.addAttribute("title", "기존 질문 제목 : " + questionVo.getQuestion_title());
		model.addAttribute("content","기존 질문 내용 : " + questionVo.getQuestion_content());
		return "board/QandA_update";
	}
	@PostMapping("/board/QandA_update")
	public String QandAUpdate(Authentication a,Model model,@RequestParam("question_id")Long question_id,@RequestParam("category_id")Long category_id,
			@RequestParam("question_title")String question_title,@RequestParam("question_content")String question_content) {
		MemberVo memberVo = (MemberVo)a.getPrincipal();
		int result = boardService.QuestionUpdate(memberVo.getMember_id(),question_id, category_id, question_title, question_content);
		if(result == 1) {
			model.addAttribute("msg", "수정되었습니다.");
		return "board/QandA_update";
		}else {
			model.addAttribute("msg", "수정 권한이 없습니다.");
			return "board/QandA_update";
		}
	}
	
	//Q & A 질문 삭제
	@GetMapping("/board/QandA_delete")
	public String QandADeleteForm(Model model,QuestionVo questionVo,@RequestParam("question_id")Long question_id) {
		questionVo = boardService.QuestionView(question_id);
		model.addAttribute("question_id", question_id);
		return "board/QandA_delete";
	}
	@PostMapping("/board/QandA_delete")
	public String QandADelete(Authentication a ,Model model,@RequestParam("question_id")Long question_id) {
		MemberVo memberVo = (MemberVo)a.getPrincipal();
		int result = boardService.QuestionDelete(memberVo.getMember_id(),question_id);
		if(result == 1) {
		model.addAttribute("msg", "삭제되었습니다.");
		return "board/QandA_delete";
		}else {
			model.addAttribute("msg", "삭제 권한이 없습니다.");
			return "board/QandA_delete";
		}
	}
	
}

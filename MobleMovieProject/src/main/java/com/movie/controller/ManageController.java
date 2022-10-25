package com.movie.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.movie.service.ManageService;
import com.movie.vo.AnswerVo;
import com.movie.vo.MemberVo;
import com.movie.vo.NoticeVo;
import com.movie.vo.QuestionVo;

@RestController
@RequestMapping("manage")
public class ManageController {
	@Autowired
	ManageService manageService;
	
	//관리자 페이지 메인
	@GetMapping("/manage_main")
	public String manageMainForm(Model model, Authentication a) {
		MemberVo memberVo = (MemberVo)a.getPrincipal();
		model.addAttribute("info", "관리자 : " + memberVo.getMember_nickname());
		return "manage/manage_main";
	}
	
	//회원 관리자 리스트
	@GetMapping("/manage_adminList")
	public List<Map<String,Object>> adminList(){
		return manageService.adminList();
	}
	//사용자 리스트
	@GetMapping("/manage_userList")
	public List<Map<String,Object>> userList(){
		return manageService.userList();
	}
	//탈퇴회원 리스트
	@GetMapping("/manage_resignList")
	public List<Map<String,Object>> resignList(){
		return manageService.resignList();
	}
	
	//회원 강제 탈퇴
	@GetMapping("/manage_member_delete")
	public String manageDelete(@RequestParam("member_account")String member_account,
			@RequestParam("member_email")String member_email) {
		int result = manageService.deleteMember(member_account, member_email);
		if(result == 1) {
			return "회원을 탈퇴 시켰습니다.";
		}else {
		return "아이디와 메일이 일치하는 회원이 없습니다.";
		}
	}

	//공지사항
	
	//관리자페이지 공지사항 리스트
	@GetMapping("/manage_notice")
	public List<Map<String,Object>> manageNotice() {
		return manageService.manageNoticeList();
	}
	//관리자페이지 공지사항 삭제 리스트
	@GetMapping("/manage_delete_notice")
	public List<Map<String,Object>> manageDeleteNotice() {
		return manageService.manageNoticeDeleteList();
	}
	
	//관리자 페이지 공지사항 세부내용
	@GetMapping("/manage_notice_detail")
	public Map manageNoticeDetailForm(@RequestParam("id")Long notice_id) {
		Map input = manageService.manageNoticeView(notice_id);
		return input;
	}
	//관리자 페이지 공지사항 추가
	@GetMapping("/manage_notice_add")
	public String manageNoticeAdd(Authentication a,@RequestParam("category_id")Long category_id,
			@RequestParam("notice_title")String notice_title,@RequestParam("notice_content")String notice_content) {
		MemberVo memberVo = (MemberVo)a.getPrincipal();
		manageService.manageNoticeAdd(memberVo.getMember_id(), category_id, notice_title, notice_content);
		return "공지사항 추가 성공";
	
	}
	//관리자 페이지 공지사항 수정
//	@GetMapping("/manage/manage_notice_update")
//	public String manageNoticeUpdateForm(Model model,@RequestParam("notice_id")Long notice_id) {
//		NoticeVo noticeVo = manageService.manageNoticeView(notice_id);
//		model.addAttribute("notice_id", notice_id);
//		model.addAttribute("category", "기존 카테고리 : " + noticeVo.getCategory_name());
//		model.addAttribute("title", "기존 공지사항 제목 : " + noticeVo.getNotice_title());
//		model.addAttribute("content","기존 공지사항 내용 : " + noticeVo.getNotice_content());
//		return "manage/manage_notice_update";
//	}
	@GetMapping("/manage_notice_update")
	public String manageNoticeUpdate(@RequestParam("notice_id")Long notice_id,@RequestParam("category_id")Long category_id,
			@RequestParam("notice_title")String notice_title,@RequestParam("notice_content")String notice_content) {
		
		int result = manageService.manageNoticeUpdate(notice_id, category_id, notice_title, notice_content);
		if(result == 1) {
			return "수정 성공";
			}else {
				return "수정 권한이 없습니다.";
			}
	}
	
	//관리자 페이지 공지사항 삭제
//	@GetMapping("/manage/manage_notice_delete")
//	public String manageNoticeDeleteForm(Model model,NoticeVo noticeVo,@RequestParam("notice_id")Long notice_id) {
//		noticeVo = manageService.manageNoticeView(notice_id);
//		model.addAttribute("notice_id",notice_id);
//		return "manage/manage_notice_delete";
//	}
	@GetMapping("/manage_notice_delete")
	public String manageNoticeDelete(@RequestParam("notice_id")Long notice_id) {
		int result = manageService.manageNoticeDelete(notice_id);
		if(result == 1) {
			return "삭제 성공";
		}else {
			return "삭제 권한이 없습니다.";
		}
	}
	
	//관리자페이지 Q & A 리스트
	@GetMapping("/manage_question_list")
	public List<Map<String,Object>> manageQuestionList() {
		return manageService.manageQuestionList();
	}
	//Q & A 삭제 리스트
	@GetMapping("/manage_question_delete_list")
	public List<Map<String,Object>> manageQuestionDeleteList() {
		return manageService.manageQuestionDeleteList();
	}
	
	//관리자 페이지 Q & A 세부내용
	@GetMapping("/manage_question_detail")
	public Map manageQustionDetail(@RequestParam("id")Long question_id) {
		Map input = manageService.manageQuestionView(question_id);
		return input;
	}
	//답변
	@GetMapping("/manage_answer_detail")
	public Map manageAnswerDetail(@RequestParam("id")Long question_id) {
		Map input = manageService.manageAnswerView(question_id);
		return input;
	}
	
	//관리자 페이지 Q & A 질문 삭제
	@GetMapping("/manage_question_delete")
	public String manageQuestionDelete(@RequestParam("question_id")Long question_id) {
		int result = manageService.manageQuestionDelete(question_id);
		if(result == 1) {
			return "삭제 성공";
		}else {
			return "삭제 실패";
		}
	}
	
	//관리자 페이지 Q & A 답변 작성
	@GetMapping("/manage_answer_add")
	public String manageAnswerAdd(Authentication a, @RequestParam("question_id")Long question_id,
			@RequestParam("answer_title")String answer_title, @RequestParam("answer_content")String answer_content) {
		MemberVo memberVo = (MemberVo)a.getPrincipal();
		manageService.manageAnswerAdd(question_id, memberVo.getMember_id(), answer_title, answer_content);
		return "성공";
	}
	
	//관리자 페이지 Q & A 답변 수정
	@GetMapping("/manage_answer_update")
	public String manageAnswerUpdate(@RequestParam("answer_id")Long answer_id,
			@RequestParam("answer_title")String answer_title,@RequestParam("answer_content")String answer_content) {
		int result = manageService.manageAnswerUpdate(answer_id, answer_title, answer_content);
		if(result == 1) {
			return "수정 성공";
		}else {
			return "수정 실패";
		}
	}
	
	//관리자 페이지 Q & A 답변 삭제
	@GetMapping("/manage_answer_delete")
	public String manageAnswerDelete(@RequestParam("answer_id")Long answer_id) {
		int result = manageService.manageAnswerDelete(answer_id);
		if(result == 1) {
			return "삭제 성공";
		}else {
			return "삭제 실패";
		}
	}

}

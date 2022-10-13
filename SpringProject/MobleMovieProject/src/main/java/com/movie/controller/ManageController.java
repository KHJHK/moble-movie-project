package com.movie.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.movie.service.ManageService;
import com.movie.vo.MailVo;
import com.movie.vo.MemberVo;
import com.movie.vo.NoticeVo;
import com.movie.vo.QuestionVo;

@Controller
public class ManageController {
	@Autowired
	ManageService manageService;
	
	//관리자 페이지 메인
	@GetMapping("/manage/manage_main")
	public String manageMainForm(Model model, Authentication a) {
		MemberVo memberVo = (MemberVo)a.getPrincipal();
		model.addAttribute("info", "관리자 : " + memberVo.getMember_nickname());
		return "manage/manage_main";
	}
	@PostMapping("manage/manage_main")
	public String manageMain() {
		return "manage/manage_main";
	}
	
	//회원 관리
	@GetMapping("/manage/manage_member")
	public String manageMemberForm(Model model) {
		
		List<MemberVo> AdminList = manageService.AdminList();
		model.addAttribute("adminList", AdminList);
		
		List<MemberVo> UserList = manageService.UserList();
		model.addAttribute("userList", UserList);
		
		List<MemberVo> ResignList = manageService.ResignList();
		model.addAttribute("resignList", ResignList);
		return "manage/manage_member";
		
	}
	@PostMapping("/manage/manage_member")
	public String manageMember() {
		return "manage/manage_member";
	}
	
	//회원 강제 탈퇴
	@GetMapping("/manage/manage_delete")
	public String manageDeleteForm() {
		return "manage/manage_delete";
	}
	@PostMapping("/manage/manage_delete")
	public String manageDelete(Model model, @RequestParam("member_account")String member_account,
			@RequestParam("member_email")String member_email) {
		int result = manageService.DeleteMember(member_account, member_email);
		if(result == 1) {
			model.addAttribute("info",member_account +" 회원을 탈퇴 시켰습니다.");
			return "manage/manage_delete";
		}else {
			model.addAttribute("info", "아이디와 메일이 일치하는 회원이 없습니다.");
		return "manage/manage_delete";
		}
	}
	
	//회원에게 메일 보내기
	@GetMapping("/manage/manage_mail")
	public String manageMail() {
		return "manage/manage_mail";
	}
	@PostMapping("/manage/manage_mail")
	public String sendMail(MailVo mailVo,Model model) {
		manageService.sendSimpleMessage(mailVo);
		model.addAttribute("info", "메일을 전송 하였습니다.");
		return "manage/manage_mail";
	}
	
	//공지사항
	
	//관리자페이지 공지사항 리스트
	@GetMapping("/manage/manage_notice")
	public String manageNotice(Model model) {
		List<NoticeVo> ManageNoticeList = manageService.ManageNoticeList();
		model.addAttribute("noticeList", ManageNoticeList);
		List<NoticeVo> ManageNoticeDeleteList = manageService.ManageNoticeDeleteList();
		model.addAttribute("deleteList", ManageNoticeDeleteList);
		return "manage/manage_notice";
	}
	@PostMapping("/manage/manage_notice")
	public String manageNoticeForm() {
		return "manage/manage_notice";
	}
	
	//관리자 페이지 공지사항 세부내용
	@GetMapping("/manage/manage_notice_detail")
	public String manageNoticeDetailForm(Model model, @RequestParam("id")Long notice_id) {
		NoticeVo noticeVo = manageService.ManageNoticeView(notice_id);
		model.addAttribute("notice_id", noticeVo.getNotice_id());
		model.addAttribute("notice_title", noticeVo.getNotice_title());
		model.addAttribute("category_name", noticeVo.getCategory_name());
		model.addAttribute("member_nickname", noticeVo.getMember_nickname());
		model.addAttribute("notice_reg_date", noticeVo.getNotice_reg_date());
		model.addAttribute("notice_count", noticeVo.getNotice_count());
		model.addAttribute("notice_content", noticeVo.getNotice_content());
		return "manage/manage_notice_detail";
	}
	@PostMapping("/manage/manage_notice_detail")
	public String manageNoticeDetail() {
		return "manage/manage_notice_detail";
	}
	//관리자 페이지 공지사항 추가
	@GetMapping("/manage/manage_notice_add")
	public String manageNoticeAddForm() {
		return "manage/manage_notice_add";
	}
	@PostMapping("/manage/manage_notice_add")
	public String manageNoticeAdd(Authentication a,@RequestParam("category_id")Long category_id,
			@RequestParam("notice_title")String notice_title,@RequestParam("notice_content")String notice_content) {
		MemberVo memberVo = (MemberVo)a.getPrincipal();
		manageService.ManageNoticeAdd(memberVo.getMember_id(), category_id, notice_title, notice_content);
		return "redirect:/manage/manage_notice";
	}
	//관리자 페이지 공지사항 수정
	@GetMapping("/manage/manage_notice_update")
	public String manageNoticeUpdateForm(Model model,@RequestParam("notice_id")Long notice_id) {
		NoticeVo noticeVo = manageService.ManageNoticeView(notice_id);
		model.addAttribute("notice_id", notice_id);
		model.addAttribute("category", "기존 카테고리 : " + noticeVo.getCategory_name());
		model.addAttribute("title", "기존 공지사항 제목 : " + noticeVo.getNotice_title());
		model.addAttribute("content","기존 공지사항 내용 : " + noticeVo.getNotice_content());
		return "manage/manage_notice_update";
	}
	@PostMapping("/manage/manage_notice_update")
	public String manageNoticeUpdate(@RequestParam("notice_id")Long notice_id,@RequestParam("category_id")Long category_id,
			@RequestParam("notice_title")String notice_title,@RequestParam("notice_content")String notice_content) {
		
		manageService.ManageNoticeUpdate(notice_id, category_id, notice_title, notice_content);
		return "redirect:/manage/manage_notice";
	}
	
	//관리자 페이지 공지사항 삭제
	@GetMapping("/manage/manage_notice_delete")
	public String manageNoticeDeleteForm(Model model,NoticeVo noticeVo,@RequestParam("notice_id")Long notice_id) {
		noticeVo = manageService.ManageNoticeView(notice_id);
		model.addAttribute("notice_id",notice_id);
		return "manage/manage_notice_delete";
	}
	@PostMapping("/manage/manage_notice_delete")
	public String manageNoticeDelete(Model model,@RequestParam("notice_id")Long notice_id) {
		int result = manageService.ManageNoticeDelete(notice_id);
		if(result == 1) {
		model.addAttribute("msg", "삭제 되었습니다.");
		return "manage/manage_notice_delete";
		}else {
			model.addAttribute("msg", "삭제 실패 했습니다.");
			return "manage/manage_notice_delete";
		}
	}
	
	//관리자페이지 Q & A 리스트
	@GetMapping("/manage/manage_QandA")
	public String manageQuestion(Model model) {
		List<QuestionVo> ManageQuestionList = manageService.ManageQuestionList();
		model.addAttribute("questionList", ManageQuestionList);
		List<QuestionVo> ManageQuestionDeleteList = manageService.ManageQuestionDeleteList();
		model.addAttribute("deleteList", ManageQuestionDeleteList);
		return "manage/manage_QandA";
	}
	@PostMapping("/manage/manage_QandA")
	public String manageQuestionForm() {
		return "manage/manage_QandA";
	}
	
	//관리자 페이지 Q & A 세부내용
	@GetMapping("/manage/manage_QandA_detail")
	public String manageQandADetailForm(Model model, @RequestParam("id")Long question_id) {
		QuestionVo questionVo = manageService.ManageQuestionView(question_id);
		model.addAttribute("question_id",questionVo.getQuestion_id() );
		model.addAttribute("question_title",questionVo.getQuestion_title() );
		model.addAttribute("category_name",questionVo.getCategory_name() );
		model.addAttribute("member_account",questionVo.getMember_account() );
		model.addAttribute("question_reg_date",questionVo.getQuestion_reg_date());
		model.addAttribute("question_content", questionVo.getQuestion_content());
		return "manage/manage_QandA_detail";
	}
	@PostMapping("/manage/manage_QandA_detail")
	public String manageQandADetail() {
		return "manage/manage_QandA_detail";
	}
	
	//관리자 페이지 Q&A 질문 삭제
	@GetMapping("/manage/manage_QandA_delete")
	public String manageQandADeleteForm(Model model,QuestionVo questionVo,@RequestParam("question_id")Long question_id) {
		questionVo = manageService.ManageQuestionView(question_id);
		model.addAttribute("question_id", question_id);
		return "manage/manage_QandA_delete";
	}
	@PostMapping("/manage/manage_QandA_delete")
	public String manageQandADelete(Model model,@RequestParam("question_id")Long question_id) {
		int result = manageService.ManageQuestionDelete(question_id);
		if(result == 1) {
			model.addAttribute("msg", "삭제 되었습니다.");
			return "manage/manage_QandA_delete";
			}else {
				model.addAttribute("msg", "삭제 실패 했습니다.");
				return "manage/manage_QandA_delete";
			}
	}
	

}

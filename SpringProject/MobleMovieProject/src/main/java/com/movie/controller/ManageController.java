package com.movie.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.movie.service.ManageService;
import com.movie.vo.MailVo;
import com.movie.vo.MemberVo;

@Controller
public class ManageController {
	@Autowired
	ManageService manageService;
	
	//관리자 페이지 메인
	@GetMapping("/manage/manage_main")
	public String manageMainForm() {
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

}

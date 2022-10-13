package com.movie.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.movie.service.MemberService;
import com.movie.vo.MemberVo;

@Controller
public class MemberCotroller {
	@Autowired
	MemberService memberService;
	
	//메인
	@GetMapping
	public String main() {
		return "redirect:/member/login";
	}
	
	//로그인
	@GetMapping("/member/login")
	public String login() {
		return "member/login";
	}
	//로그인 실패
	@GetMapping("/member/login_fail")
	public String loginFail() {
		return "member/login_fail";
	}
	//로그인 성공
	@GetMapping("/member/login_success")
	public String loginSuccess(Model model, Authentication a) {
		MemberVo memberVo = (MemberVo) a.getPrincipal();
		model.addAttribute("info", memberVo.getMember_account()+" 의 "+memberVo.getMember_name()+"님");
		return "member/login_success";
	}
	
	//로그아웃
	@GetMapping("/member/logout")
	public String logoutPage(HttpServletRequest request,HttpServletResponse response) {
		new SecurityContextLogoutHandler().logout(request, response, SecurityContextHolder.getContext().getAuthentication());
		return "member/logout";
	}
	
	//회원가입
	@GetMapping("/member/signup")
	public String signupForm() {
		return "member/signup";
	}
	
	@PostMapping("/member/signup")
	public String signup(MemberVo memberVo) {
		memberService.signup(memberVo);
		return "redirect:/member/login";
	}
	
	//비밀번호 확인
	@GetMapping("/member/password_check")
	public String passwordCheckForm() {
		return "member/password_check";
	}
	@PostMapping("/member/password_check")
	public String passwordCheck(Model model, Authentication a, @RequestParam("member_pw")String member_pw) {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		MemberVo memberVo = (MemberVo) a.getPrincipal();
		if(passwordEncoder.matches(member_pw, memberVo.getMember_pw())) {
			return "member/member_update";
		}else {
			model.addAttribute("info", "비밀번호가 틀립니다.");
		return "member/password_check";
		}
	}
	
	//회원 정보 수정
	@GetMapping("/member/member_update")
	public String memberUpdateForm() {
		return "member/member_update";
	}
	@PostMapping("/member/member_update")
	public String memberUpdate(Authentication a,@RequestParam("member_pw")String member_pw,
			@RequestParam("member_email")String member_email, @RequestParam("member_nickname")String member_nickname) {
		MemberVo memberVo = (MemberVo) a.getPrincipal();
		memberService.UpdateMember(member_pw, member_email, member_nickname, memberVo.getMember_account());
		
		return "redirect:/member/login_success";
	}
	
	//회원 탈퇴
	@GetMapping("/member/member_delete")
	public String memberDeleteForm() {
		return "member/member_delete";
	}
	@PostMapping("/member/member_delete")
	public String memberDelete(Authentication a) {
		MemberVo memberVo = (MemberVo) a.getPrincipal();
		memberService.DeleteMember(memberVo.getMember_account());
		return "redirect:/member/login_success";
	}
	
	//아이디 찾기
	@GetMapping("/member/find_id")
	public String findIdForm() {
		return "member/find_id";
	}
	@PostMapping("/member/find_id")
	public String findID(Model model, @RequestParam("member_name")String member_name,
			@RequestParam("member_email")String member_email) {
		MemberVo memberVo = memberService.findID(member_name, member_email);
		if(memberVo == null) {
			model.addAttribute("info", "찾는 아이디가 없습니다.");
			return "member/find_id";
		}else {
			String id = memberVo.getMember_account();
			StringBuilder sb = new StringBuilder(id);
			for(int i = 3; i < id.length(); i++) {
				sb.setCharAt(i, '*');
			}
			id = sb.toString();
			model.addAttribute("info", "아이디 : " + id );
			return "member/find_id";
		}
	}
	
	//인증번호 생성
	@GetMapping("/member/find_pw")
	public String findPwForm() {
		return "member/find_pw";
	}
	@PostMapping("/member/find_pw")
	public String findPw(Model model,MemberVo memberVo,@RequestParam("member_account")String member_account, 
			@RequestParam("member_name")String member_name,@RequestParam("member_email")String member_email) {
		int result = memberService.CreateCode(member_account, member_name, member_email);
		if(result == 1) {
			return "member/reset_pw";
		}else {
			model.addAttribute("info", "일치하는 정보가 없습니다.");
			return "member/find_pw";
			}
	}
	
	//비밀번호 재설정
	@GetMapping("/member/reset_pw")
	public String resetPwForm() {
		return "member/reset_pw";
	}
	@PostMapping("/member/reset_pw")
	public String resetPw(Model model,MemberVo memberVo,@RequestParam("member_pw")String member_pw, 
			@RequestParam("member_email")String member_email, @RequestParam("member_code")int member_code) {
		int result = memberService.resetPW(member_pw, member_email, member_code);
		if(result == 1) {
			model.addAttribute("msg", "비밀번호가 재설정 되었습니다.");
			return "member/reset_pw";
		}else {
			model.addAttribute("msg", "인증번호가 다릅니다.");
			return "member/reset_pw";
		}
	}

}

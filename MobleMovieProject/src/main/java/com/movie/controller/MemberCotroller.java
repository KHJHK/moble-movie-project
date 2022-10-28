package com.movie.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.movie.service.MemberService;
import com.movie.service.PickService;
import com.movie.vo.MemberVo;

@RestController
@RequestMapping("member")
public class MemberCotroller {
	@Autowired
	MemberService memberService;
	@Autowired
	PickService pickService;
	
	//메인
	@GetMapping
	public String main() {
		return "redirect:/member/login";
	}
	
	//로그인
	@GetMapping("/login")
	public String login() {
		return "member/login";
	}
	//로그인 실패
	@GetMapping("/login_fail")
	public String loginFail() {
		return "member/login_fail";
	}
	//로그인 성공
	@GetMapping("/login_success")
	public String loginSuccess(Model model, Authentication a) {
		MemberVo memberVo = (MemberVo) a.getPrincipal();
		model.addAttribute("info", memberVo.getMember_account()+" 의 "+memberVo.getMember_name()+"님");
		return "member/login_success";
	}
	
	//로그아웃
	@GetMapping("/logout")
	public String logoutPage(HttpServletRequest request,HttpServletResponse response) {
		new SecurityContextLogoutHandler().logout(request, response, SecurityContextHolder.getContext().getAuthentication());
		return "member/logout";
	}
	
	//회원가입
	@GetMapping("/signup")
	public String signup(MemberVo memberVo) {
		int result = memberService.signup(memberVo);
		if(result == 1) {
			return "회원가입 완료";
		}else {
			return "입력 다시하세요.";
		}
	}
	
	//비밀번호 확인 후 수정
	@GetMapping("/member_update")
	public String memberUpdate(Authentication a, @RequestParam("check_pw")String check_pw, @RequestParam("member_pw")String member_pw,
			@RequestParam("member_email")String member_email, @RequestParam("member_nickname")String member_nickname) {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		MemberVo memberVo = (MemberVo) a.getPrincipal();
		if(passwordEncoder.matches(check_pw, memberVo.getMember_pw())) {
			int result =memberService.UpdateMember(member_pw, member_email, member_nickname, memberVo.getMember_account());
			if(result == 1) {
				return "정보 수정 완료";
			}else {
				return "정보 수정 실패";
			}
		}else {
			return "비밀번호가 틀립니다.";
		}
	}

	//회원 탈퇴
	@GetMapping("/member_delete")
	public String memberDelete(Authentication a) {
		MemberVo memberVo = (MemberVo) a.getPrincipal();
		memberService.DeleteMember(memberVo.getMember_account());
		return "회원 탈퇴 완료";
	}
	
	//아이디 찾기
	@GetMapping("/find_id")
	public String findID(@RequestParam("member_name")String member_name,
			@RequestParam("member_email")String member_email) {
		MemberVo memberVo = memberService.findID(member_name, member_email);
		if(memberVo == null) {
			return "찾는 아이디가 없습니다.";
		}else {
			String id = memberVo.getMember_account();
			StringBuilder sb = new StringBuilder(id);
			for(int i = 3; i < id.length(); i++) {
				sb.setCharAt(i, '*');
			}
			id = sb.toString();
			return "아이디 : " + id;
		}
	}
	
	//인증번호 생성 및 비밀번호 재설정
	@GetMapping("/find_pw")
	public String findPw(MemberVo memberVo,@RequestParam("member_account")String member_account, 
			@RequestParam("member_name")String member_name,@RequestParam("member_email")String member_email,
			@RequestParam("member_pw")String member_pw, @RequestParam("member_code")int member_code) {
		int resultCode = memberService.CreateCode(member_account, member_name, member_email);
		if(resultCode == 1) {
			int resultPw = memberService.resetPW(member_pw, member_email, member_code);
			if(resultPw == 1) {
				return "비밀번호가 재설정 되었습니다.";
			}else {
				return "인증번호가 다릅니다.";
			}
		}else {
			return "일치하는 정보가 없습니다.";
		}
	}
	
	@GetMapping("/mypage")
	public List<Map> mypage(@RequestParam("member_id")Long member_id){
		return pickService.getPickInfoList(member_id);
	}

}

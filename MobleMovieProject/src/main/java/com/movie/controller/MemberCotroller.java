package com.movie.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.movie.service.MemberService;
import com.movie.vo.MemberVo;
import com.movie.vo.TokenVo;

@RestController
@CrossOrigin
@RequestMapping("member")
public class MemberCotroller {
	@Autowired
	MemberService memberService;

	
	//메인
	@GetMapping
	public String main() {
		return "redirect:/member/login";
	}
	
	//로그인
	@PostMapping("/login")
	public String login(@RequestBody Map map) {
		TokenVo token = new TokenVo();
		token.setMember_account(map.get("member_account").toString());
		token.setMember_pw(map.get("member_pw").toString());
		return memberService.loginToken(token);
	}
//	//로그인 실패
//	@GetMapping("/login_fail")
//	public String loginFail() {
//		return "로그인 실패";
//	}
//	//로그인 성공
//	@GetMapping("/login_success")
//	public String loginSuccess(Model model, Authentication a) {
//		MemberVo memberVo = (MemberVo) a.getPrincipal();
//		model.addAttribute("info", memberVo.getMember_account()+" 의 "+memberVo.getMember_name()+"님");
//		return "로그인 성공";
//	}
	
	//로그아웃
	@GetMapping("/logout")
	public String logoutPage(HttpServletRequest request,HttpServletResponse response) {
		new SecurityContextLogoutHandler().logout(request, response, SecurityContextHolder.getContext().getAuthentication());
		return "로그아웃 성공";
	}
	
	//회원가입
	@PostMapping("/signup")
	   public String signup(@RequestBody MemberVo memberVo) {
	      int result = memberService.signup(memberVo);
	      if(result == 1) {
	         return "회원가입 완료";
	      }else {
	         return "입력을 다시하세요.";
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
			return id;
		}
	}
	
	//인증번호 생성 및 비밀번호 재설정
	 @GetMapping("/find_pw")
     public String findPw(@RequestParam("member_account")String member_account, @RequestParam("member_name")String member_name,
           @RequestParam("member_email")String member_email) {
        System.out.println(member_account + member_name + member_email);
        int result = memberService.CreateCode(member_account, member_name, member_email);
        if(result == 1) {
           return "인증번호가 전송되었습니다.";
        }
        else {
           return "일치하는 정보가 없습니다.";
        }
     }
     
     //비밀번호 재설정
     @GetMapping("/reset_pw")
     public String resetPw(@RequestParam("member_email")String member_email,@RequestParam("member_code")int member_code,
           @RequestParam("member_pw")String member_pw) {
        int result = memberService.resetPW(member_pw, member_email, member_code);
        if(result == 1) {
           return "비밀번호가 재설정 되었습니다.";
        }else {
           return "인증번호가 다릅니다.";
        }
     }
}

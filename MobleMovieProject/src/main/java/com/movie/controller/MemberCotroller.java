package com.movie.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
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
import com.movie.vo.LoginVo;
import com.movie.vo.MemberVo;

@RestController
@CrossOrigin
@RequestMapping("member")
public class MemberCotroller {
	@Autowired
	MemberService memberService;

	
	//로그인
	@PostMapping("/login")
	public String login(@RequestBody Map map) {
		LoginVo loginVo = new LoginVo();
		loginVo.setMember_account(map.get("member_account").toString());
		loginVo.setMember_pw(map.get("member_pw").toString());
		return memberService.login(loginVo);
	}
	
	
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
	
	//비밀번호 확인
	@GetMapping("/member_pw_check")
	public String memberPwCheck(@RequestBody Map map) {
		String input_pw = map.get("input_pw").toString();
		String member_pw = map.get("member_pw").toString();
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		if(passwordEncoder.matches(input_pw,member_pw)) {
			return "비밀번호가 맞습니다.";
		}else {
			return "비밀번호가 틀립니다.";
		}
	}
	
	//회원정보 수정
	@PostMapping("/member_update")
	public String memberUpdate(@RequestBody Map map) {
		String member_pw = map.get("member_pw").toString();
		String member_email = map.get("member_email").toString();
		String member_nickname = map.get("member_nickname").toString();
		String member_account = map.get("member_account").toString();
		int result =memberService.UpdateMember(member_pw, member_email, member_nickname, member_account);
			if(result == 1) {
				return "정보 수정 완료";
			}else {
				return "정보 수정 실패";
			}
		}
	

	//회원 탈퇴
	@PostMapping("/member_delete")
	public String memberDelete(@RequestBody Map map) {
		String member_account = map.get("member_account").toString();
		memberService.DeleteMember(member_account);
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

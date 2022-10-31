package com.movie.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.apache.ibatis.javassist.compiler.ast.Member;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.movie.dao.MemberDao;
import com.movie.jwt.TokenProvider;
import com.movie.vo.LoginVo;
import com.movie.vo.MemberVo;

@Service
public class MemberService implements UserDetailsService{
	SimpleDateFormat format = new SimpleDateFormat ( "yyyy-MM-dd");
    Date time = new Date();
    String localTime = format.format(time);
    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    MemberDao memberDao;
    
    @Autowired
    private TokenProvider tokenProvider;
   

    //회원가입
    @Transactional
    public int signup(MemberVo memberVo){
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        memberVo.setMember_pw(passwordEncoder.encode(memberVo.getMember_pw()));
        memberVo.setMember_auth("USER");
        memberVo.setMember_reg_date(localTime);
        return memberDao.signup(memberVo);
    }

    //로그인
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		MemberVo memberVo = memberDao.login(username);
		
		if(memberVo == null) {
			throw new UsernameNotFoundException("User not authorized.");
		}
		return memberVo;
	}
	
	public String login(LoginVo loginVo) {
		MemberVo memberVo = memberDao.login(loginVo.getMember_account());
		BCryptPasswordEncoder Encoder = new BCryptPasswordEncoder();
		if(memberVo == null) {
			return "아이디가 없습니다.";
		}else if(!Encoder.matches(loginVo.getMember_pw(), memberVo.getMember_pw())){
			return "비밀번호가 일치하지 않습니다.";
		}else if(memberVo.getMember_auth().equals("RESIGN")) {
			return "탈퇴 회원 입니다.";
		}else {
			return tokenProvider.generateToken(memberVo, memberVo.getMember_account());
		}
	}

	
	//회원정보수정
	 @Transactional
	 public int UpdateMember(String member_pw,String member_email,String member_nickname,String member_account) {
		 BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		 return memberDao.UpdateMember(passwordEncoder.encode(member_pw), member_email, member_nickname, localTime,
				 member_account);
	 }
	 
	 //회원 탈퇴
	 @Transactional
	 public int DeleteMember(String member_account) {
		 return memberDao.DeleteMember("RESIGN", localTime, member_account);
	 }

	 //아이디 찾기
	 @Transactional
	 public MemberVo findID(String member_name, String member_email) {
		 MemberVo memberVo = memberDao.findID(member_name, member_email);
		 return memberVo;
	 }
	 
	 //인증번호 생성
	 @Transactional
	 public int CreateCode(String member_account,String member_name,String member_email) {
		 Random random = new Random();
		 int code = random.nextInt(888888)+111111;
		 SimpleMailMessage message = new SimpleMailMessage();
	        message.setFrom("woqja0192@gmail.com");
	        message.setTo(member_email);
	        message.setSubject("MCL 비밀번호 찾기 인증코드 입니다.");
	        message.setText("인증번호 : "+code );
	        mailSender.send(message);
		 return memberDao.CreateCode(code, member_account, member_name, member_email);
	 }
    
	 //비밀번호 재설정
	 @Transactional
	 public int resetPW(String member_pw, String member_email, int member_code) {
		 BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		 System.out.println(member_pw);
		 return memberDao.resetPW(passwordEncoder.encode(member_pw),member_email, member_code);
	 }
    
}

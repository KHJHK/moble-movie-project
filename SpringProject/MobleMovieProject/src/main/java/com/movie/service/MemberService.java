package com.movie.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.movie.dao.MemberDao;
import com.movie.vo.MemberVo;

@Service
public class MemberService implements UserDetailsService{
	SimpleDateFormat format = new SimpleDateFormat ( "yyyy-MM-dd HH:mm:sss");
    Date time = new Date();
    String localTime = format.format(time);
    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    MemberDao memberDao;

    //회원가입
    @Transactional
    public void signup(MemberVo memberVo){
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        memberVo.setMember_pw(passwordEncoder.encode(memberVo.getMember_pw()));
        memberVo.setMember_auth("USER");
        memberVo.setMember_reg_date(localTime);
        memberDao.signup(memberVo);
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

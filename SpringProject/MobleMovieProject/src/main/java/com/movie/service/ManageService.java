package com.movie.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.movie.dao.ManageDao;
import com.movie.vo.MailVo;
import com.movie.vo.MemberVo;
import com.movie.vo.NoticeVo;
import com.movie.vo.QuestionVo;

@Service
public class ManageService {
	@Autowired
	ManageDao manageDao;
	
	@Autowired
	private JavaMailSender mailSender;
	
	SimpleDateFormat format = new SimpleDateFormat ( "yyyy-MM-dd HH:mm:sss");
    Date time = new Date();
    String localTime = format.format(time);
	
    //회원
	//관리자 리스트 출력
	@Transactional
	public List<MemberVo> AdminList(){
		return manageDao.AdminList("ADMIN");
	}
	//회원 리스트
	@Transactional
	public List<MemberVo> UserList(){
		return manageDao.UserList("USER");
	}
	//탈퇴 회원 리스트
	@Transactional
	public List<MemberVo> ResignList(){
		return manageDao.ResignList("RESIGN");
	}
	//회원 강제 탈퇴
	@Transactional
	public int DeleteMember(String member_account, String member_email) {
		SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("woqja0192@gmail.com");
        message.setTo(member_email);
        message.setSubject("MCL 영화 예매 사이트 입니다.");
        message.setText("회원이 강제 탈퇴 되었습니다.");
        mailSender.send(message);
		return manageDao.DeleteMember("RESIGN",localTime, member_account, member_email);
	}
	//회원에게 메일 보내기
	public void sendSimpleMessage(MailVo mailVo) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("woqja0192@gmail.com");
        message.setTo(mailVo.getAddress());
        message.setSubject(mailVo.getTitle());
        message.setText(mailVo.getContent());
        mailSender.send(message);
    }
	
	
	//공지사항
	//공지사항 리스트
	@Transactional
	public List<NoticeVo> ManageNoticeList(){
		return manageDao.ManageNoticeList("Y");
	}
	//공지사항 삭제된 리스트
	@Transactional
	public List<NoticeVo> ManageNoticeDeleteList(){
		return manageDao.ManageNoticeList("N");
	}
	//공지사항 세부내용
	@Transactional
	public NoticeVo ManageNoticeView(Long notice_id) {
		NoticeVo noticeVo = manageDao.ManageNoticeView(notice_id);
		return noticeVo;
	}
	//공지사항 추가
	@Transactional
	public void ManageNoticeAdd(Long member_id,Long category_id,String notice_title,String notice_content) {
		manageDao.ManageNoticeAdd(member_id, category_id, localTime, notice_title, notice_content);
	}
	//공지사항 수정
	@Transactional
	public int ManageNoticeUpdate(Long notice_id,Long category_id, String notice_title, String notice_content) {
		return manageDao.ManageNoticeUpdate(notice_id, category_id, notice_title, notice_content);
	}
	
	//공지사항 삭제
	@Transactional
	public int ManageNoticeDelete(Long notice_id) {
		return manageDao.ManageNoticeDelete(notice_id);
	}
	
	//Q & A
	//Q & A 리스트
	@Transactional
	public List<QuestionVo> ManageQuestionList(){
		return manageDao.ManageQuestionList("Y");
	}
	
	//Q & A 삭제된 리스트
	@Transactional
	public List<QuestionVo> ManageQuestionDeleteList(){
		return manageDao.ManageQuestionList("N");
	}
	
	//Q & A 세부내용
	@Transactional
	public QuestionVo ManageQuestionView(Long question_id) {
		QuestionVo questionVo = manageDao.ManageQuestionView(question_id);
		return questionVo;
	}
	//Q & A 질문 삭제
	@Transactional
	public int ManageQuestionDelete(Long question_id) {
		return manageDao.ManageQuestionDelete(question_id);
	}
}

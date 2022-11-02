package com.movie.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.movie.dao.ManageDao;
import com.movie.dao.MemberDao;
import com.movie.vo.AnswerVo;
import com.movie.vo.MemberVo;
import com.movie.vo.NoticeVo;
import com.movie.vo.QuestionVo;

@Service
public class ManageService {
   @Autowired
   ManageDao manageDao;
   
   @Autowired
   MemberDao memberDao;
   
   @Autowired
   private JavaMailSender mailSender;
   
   SimpleDateFormat format = new SimpleDateFormat ( "yyyy-MM-dd");
    Date time = new Date();
    String localTime = format.format(time);
   
    //관리자
    @Transactional
    public MemberVo manageMain(String member_account) {
    	MemberVo memberVo = manageDao.manageMain(member_account);
    	return memberVo;
    }
    
    
    //회원
   //관리자 리스트 출력
   @Transactional
   public List<Map<String,Object>> adminList(){
      List<MemberVo> adminList = manageDao.adminList("ADMIN");
      List<Map<String,Object>> output = new ArrayList<Map<String,Object>>();
      for(int i=0;i<adminList.size();i++) {
         Map input = new HashMap<>();
         input.put("member_num", i+1);
         input.put("member_account", adminList.get(i).getMember_account());
         input.put("member_name", adminList.get(i).getMember_name());
         input.put("member_email", adminList.get(i).getMember_email());
         input.put("member_nickname", adminList.get(i).getMember_nickname());
         input.put("member_birth", adminList.get(i).getMember_birth());
         input.put("member_reg_date", adminList.get(i).getMember_reg_date());
         input.put("member_modify_date", adminList.get(i).getMember_modify_date());
         output.add(input);
      }
      return output;
   }
   //회원 리스트
   @Transactional
   public List<Map<String,Object>> userList(){
      List<MemberVo> userList = manageDao.adminList("USER");
      List<Map<String,Object>> output = new ArrayList<Map<String,Object>>();
      for(int i=0;i<userList.size();i++) {
         Map input = new HashMap<>();
         input.put("member_num", i+1);
         input.put("member_account", userList.get(i).getMember_account());
         input.put("member_name", userList.get(i).getMember_name());
         input.put("member_email", userList.get(i).getMember_email());
         input.put("member_nickname", userList.get(i).getMember_nickname());
         input.put("member_birth", userList.get(i).getMember_birth());
         input.put("member_reg_date", userList.get(i).getMember_reg_date());
         input.put("member_modify_date", userList.get(i).getMember_modify_date());
         output.add(input);
      }
      return output;
   }
   //탈퇴 회원 리스트
   @Transactional
   public List<Map<String,Object>> resignList(){
      List<MemberVo> resignList = manageDao.adminList("RESIGN");
      List<Map<String,Object>> output = new ArrayList<Map<String,Object>>();
      for(int i=0;i<resignList.size();i++) {
         Map input = new HashMap<>();
         input.put("member_num", i+1);
         input.put("member_account", resignList.get(i).getMember_account());
         input.put("member_name", resignList.get(i).getMember_name());
         input.put("member_email", resignList.get(i).getMember_email());
         input.put("member_nickname", resignList.get(i).getMember_nickname());
         input.put("member_birth", resignList.get(i).getMember_birth());
         input.put("member_reg_date", resignList.get(i).getMember_reg_date());
         input.put("member_modify_date", resignList.get(i).getMember_modify_date());
         output.add(input);
      }
      return output;
   }
   //회원 강제 탈퇴
   @Transactional
   public int deleteMember(String member_account, String member_email) {
      SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("woqja0192@gmail.com");
        message.setTo(member_email);
        message.setSubject("MCL 영화 예매 사이트 입니다.");
        message.setText("회원이 강제 탈퇴 되었습니다.");
        mailSender.send(message);
      return manageDao.deleteMember("RESIGN",localTime, member_account, member_email);
   }
   
   //공지사항
   //공지사항 리스트
   @Transactional
   public List<Map<String,Object>> manageNoticeList(){
      List<NoticeVo> noticeVoList = manageDao.manageNoticeList("Y");
      List<Map<String,Object>> output = new ArrayList<Map<String,Object>>();
      for(int i = 0; i < noticeVoList.size(); i++) {
         Map input = new HashMap<>();
         input.put("notice_id", noticeVoList.get(i).getNotice_id());
         input.put("notice_num", i+1);
         input.put("category_name", noticeVoList.get(i).getCategory_name());
         input.put("notice_reg_date", noticeVoList.get(i).getNotice_reg_date());
         input.put("notice_title", noticeVoList.get(i).getNotice_title());
         input.put("notice_count", noticeVoList.get(i).getNotice_count());
         output.add(input);
      }
      return output;      
   }
   //공지사항 삭제된 리스트
   @Transactional
   public List<Map<String,Object>> manageNoticeDeleteList(){
      List<NoticeVo> noticeVoList = manageDao.manageNoticeList("N");
      List<Map<String,Object>> output = new ArrayList<Map<String,Object>>();
      for(int i = 0; i < noticeVoList.size(); i++) {
         Map input = new HashMap<>();
         input.put("notice_num", i+1);
         input.put("category_name", noticeVoList.get(i).getCategory_name());
         input.put("notice_reg_date", noticeVoList.get(i).getNotice_reg_date());
         input.put("notice_title", noticeVoList.get(i).getNotice_title());
         input.put("notice_count", noticeVoList.get(i).getNotice_count());
         output.add(input);
      }
      return output;   
   }
   //공지사항 세부내용
   @Transactional
   public Map manageNoticeView(Long notice_id) {
      NoticeVo noticeVo = manageDao.manageNoticeView(notice_id);
      Map input = new HashMap<>();
      input.put("notice_id", noticeVo.getNotice_id());
      input.put("notice_title", noticeVo.getNotice_title());
      input.put("category_name", noticeVo.getCategory_name());
      input.put("member_nickname", noticeVo.getMember_nickname());
      input.put("notice_reg_date", noticeVo.getNotice_reg_date());
      input.put("notice_count", noticeVo.getNotice_count());
      input.put("notice_content", noticeVo.getNotice_content());
      return input;
   }
   //공지사항 추가
   @Transactional
   public void manageNoticeAdd(Long member_id,Long category_id,String notice_title,String notice_content) {
      manageDao.manageNoticeAdd(member_id, category_id, localTime, notice_title, notice_content);
   }
   //공지사항 수정
   @Transactional
   public int manageNoticeUpdate(Long notice_id,Long category_id, String notice_title, String notice_content) {
      return manageDao.manageNoticeUpdate(notice_id, category_id, notice_title, notice_content);
   }
   
   //공지사항 삭제
   @Transactional
   public int manageNoticeDelete(Long notice_id) {
      return manageDao.manageNoticeDelete(notice_id);
   }
   
   //Q & A
   //Q & A 리스트
   @Transactional
   public List<Map<String,Object>> manageQuestionList(){
      List<QuestionVo> questionVoList = manageDao.manageQuestionList("Y");
      List<Map<String, Object>> output = new ArrayList<Map<String, Object>>();
      for(int i = 0; i < questionVoList.size(); i++) {
         Map input = new HashMap<>();
         input.put("question_id", questionVoList.get(i).getQuestion_id());
         input.put("question_num", i+1);
         input.put("member_account", questionVoList.get(i).getMember_account());
         input.put("category_name", questionVoList.get(i).getCategory_name());
         input.put("question_reg_date", questionVoList.get(i).getQuestion_reg_date());
         input.put("question_title", questionVoList.get(i).getQuestion_title());
         output.add(input);
      }
      return output;         
   }
   
   //Q & A 삭제된 리스트
   @Transactional
   public List<Map<String, Object>> manageQuestionDeleteList(){
      List<QuestionVo> questionVoList = manageDao.manageQuestionList("N");
      List<Map<String, Object>> output = new ArrayList<Map<String, Object>>();
      for(int i = 0; i < questionVoList.size(); i++) {
         Map input = new HashMap<>();
         input.put("question_num", i+1);
         input.put("member_account", questionVoList.get(i).getMember_account());
         input.put("category_name", questionVoList.get(i).getCategory_name());
         input.put("question_reg_date", questionVoList.get(i).getQuestion_reg_date());
         input.put("question_title", questionVoList.get(i).getQuestion_title());
         output.add(input);
      }
      return output;   
   }
   
   //Q & A 세부내용
   @Transactional
   public Map manageQuestionView(Long question_id) {
      QuestionVo questionVo = manageDao.manageQuestionView(question_id);
      Map input = new HashMap<>();
      input.put("question_id", questionVo.getQuestion_id());
      input.put("question_title", questionVo.getQuestion_title());
      input.put("category_name", questionVo.getCategory_name());
      input.put("member_account", questionVo.getMember_account());
      input.put("question_reg_date", questionVo.getQuestion_reg_date());
      input.put("question_content", questionVo.getQuestion_content());
      return input;
   }
   //Q & A 질문 삭제
   @Transactional
   public int manageQuestionDelete(Long question_id) {
      return manageDao.manageQuestionDelete(question_id);
   }
   //Q & A 답변 내용
   @Transactional
   public Map manageAnswerView(Long question_id) {
      AnswerVo answerVo = manageDao.manageAnswerView(question_id);
      Map input = new HashMap<>();
      input.put("answer_id", answerVo.getAnswer_id());
      input.put("answer_title",answerVo.getAnswer_title());
      input.put("member_nickname",answerVo.getMember_nickname());
      input.put("answer_reg_date",answerVo.getAnswer_reg_date());
      input.put("answer_content",answerVo.getAnswer_content());
      return input;
   }
   //Q & A 답변 작성
   @Transactional
   public void manageAnswerAdd(Long question_id,Long member_id,String answer_title,String answer_content) {
      manageDao.manageAnswerAdd(question_id, member_id, localTime, answer_title, answer_content);
   }
   //Q & A 답변 수정
   @Transactional
   public int manageAnswerUpdate(Long answer_id,String answer_title,String answer_content) {
      return manageDao.manageAnswerUpdate(answer_id, answer_title, answer_content);
   }
   //Q & A 답변 삭제
   @Transactional
   public int manageAnswerDelete(Long answer_id) {
      return manageDao.manageAnswerDelete(answer_id);
   }
}
package com.movie.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.movie.service.ManageService;
import com.movie.service.MemberService;
import com.movie.service.MovieService;
import com.movie.vo.AnswerVo;
import com.movie.vo.MemberVo;
import com.movie.vo.NoticeVo;
import com.movie.vo.QuestionVo;

@RestController
@RequestMapping("manage")
public class ManageController {
   @Autowired
   ManageService manageService;
	@Autowired
	private MovieService movieService;
   
   //관리자 페이지 메인
   @GetMapping("/manageMain")
   public String manageMain(@RequestParam("member_account")String member_account) {
	   MemberVo memberVo = manageService.manageMain(member_account);
	   if(memberVo.getMember_auth().equals("ADMIN")) {
		   return "ADMIN";
	   }else{
		   return "USER";
	   }
   }

   
   //회원 관리자 리스트
   @GetMapping("/manage_adminList")
   public List<Map<String,Object>> adminList(){
      return manageService.adminList();
   }
   //사용자 리스트
   @GetMapping("/manage_userList")
   public List<Map<String,Object>> userList(){
      return manageService.userList();
   }
   //탈퇴회원 리스트
   @GetMapping("/manage_resignList")
   public List<Map<String,Object>> resignList(){
      return manageService.resignList();
   }
   
   //회원 강제 탈퇴
   @PostMapping("/manage_member_delete")
   public String manageDelete(@RequestBody Map map) {
      String member_account = map.get("member_account").toString();
      String member_email = map.get("member_email").toString();
      
      
      int result = manageService.deleteMember(member_account, member_email);
      if(result == 1) {
         return "회원을 탈퇴 시켰습니다.";
      }else {
      return "아이디와 메일이 일치하는 회원이 없습니다.";
      }
   }
   
	//영화정보
	@ResponseBody
	@GetMapping("/movie_showAll")
	public List<Map> showAllMovies(){
		return movieService.getMovieInfo();
	}

   //공지사항
   
   //관리자페이지 공지사항 리스트
   @GetMapping("/manage_notice_list")
   public List<Map<String,Object>> manageNotice() {
      return manageService.manageNoticeList();
   }
   //관리자페이지 공지사항 삭제 리스트
   @GetMapping("/manage_delete_notice_list")
   public List<Map<String,Object>> manageDeleteNotice() {
      return manageService.manageNoticeDeleteList();
   }
   
   //관리자 페이지 공지사항 세부내용
   @GetMapping("/manage_notice_detail")
   public Map manageNoticeDetailForm(@RequestParam("id")Long notice_id) {
      Map input = manageService.manageNoticeView(notice_id);
      return input;
   }
   //관리자 페이지 공지사항 추가
   //member_id를 접속자 기준을 바꿔줘야함ㄴ
   @PostMapping("/manage_notice_add")
   public String manageNoticeAdd(@RequestBody Map map) {
      String member_id_str = map.get("member_id").toString();
      String category_id_str = map.get("category_id").toString();
      String notice_title = map.get("notice_title").toString();
      String notice_content = map.get("notice_content").toString();
      
      Long member_id = Long.valueOf(member_id_str);
      Long category_id = Long.valueOf(category_id_str);
      
      manageService.manageNoticeAdd(member_id, category_id, notice_title, notice_content);
      return "공지사항 추가 성공";
   
   }
   //관리자 페이지 공지사항 수정
   @PostMapping("/manage_notice_update")
   public String manageNoticeUpdate(@RequestBody Map map) {
      
      String notice_id_str = map.get("notice_id").toString();
      String category_id_str = map.get("category_id").toString();
      String notice_title = map.get("notice_title").toString();
      String notice_content = map.get("notice_content").toString();
      
      Long notice_id = Long.valueOf(notice_id_str);
      Long category_id = Long.valueOf(category_id_str);
      
      int result = manageService.manageNoticeUpdate(notice_id, category_id, notice_title, notice_content);
      if(result == 1) {
         return "수정 성공";
         }else {
            return "수정 권한이 없습니다.";
         }
   }
   
   //관리자 페이지 공지사항 삭제
   @PostMapping("/manage_notice_delete")
   public String manageNoticeDelete(@RequestBody Map map) {
      String notice_id_str = map.get("notice_id").toString();
      Long notice_id = Long.valueOf(notice_id_str);
      int result = manageService.manageNoticeDelete(notice_id);
      if(result == 1) {
         return "삭제 성공";
      }else {
         return "삭제 권한이 없습니다.";
      }
   }
   
   //관리자페이지 Q & A 리스트
   @GetMapping("/manage_question_list")
   public List<Map<String,Object>> manageQuestionList() {
      return manageService.manageQuestionList();
   }
   //Q & A 삭제 리스트
   @GetMapping("/manage_question_delete_list")
   public List<Map<String,Object>> manageQuestionDeleteList() {
      return manageService.manageQuestionDeleteList();
   }
   
   //관리자 페이지 Q & A 세부내용
   @GetMapping("/manage_question_detail")
   public Map manageQustionDetail(@RequestParam("id")Long question_id) {
      Map input = manageService.manageQuestionView(question_id);
      return input;
   }
   //답변
   @GetMapping("/manage_answer_detail")
   public Map manageAnswerDetail(@RequestParam("id")Long question_id) {
      Map input = manageService.manageAnswerView(question_id);
      return input;
   }
   
   //관리자 페이지 Q & A 질문 삭제
   @PostMapping("/manage_question_delete")
   public String manageQuestionDelete(@RequestBody Map map) {
      String question_id_str = map.get("question_id").toString();
      Long question_id = Long.valueOf(question_id_str);
      
      int result = manageService.manageQuestionDelete(question_id);
      if(result == 1) {
         return "삭제 성공";
      }else {
         return "삭제 실패";
      }
   }
   
   //관리자 페이지 Q & A 답변 작성
   @PostMapping("/manage_answer_add")
   public String manageAnswerAdd(@RequestBody Map map) {
      String member_id_str = map.get("member_id").toString();
      String question_id_str = map.get("question_id").toString();
      String answer_title = map.get("answer_title").toString();
      String answer_content = map.get("answer_content").toString();
      
      Long member_id = Long.valueOf(member_id_str);
      Long question_id = Long.valueOf(question_id_str);
      
      manageService.manageAnswerAdd(question_id, member_id, answer_title, answer_content);
      return "성공";
   }
   
   //관리자 페이지 Q & A 답변 수정
   @PostMapping("/manage_answer_update")
   public String manageAnswerUpdate(@RequestBody Map map) {
      String answer_id_str = map.get("answer_id").toString();
      String answer_title = map.get("answer_title").toString();
      String answer_content = map.get("answer_content").toString();
      Long answer_id = Long.valueOf(answer_id_str);
      int result = manageService.manageAnswerUpdate(answer_id, answer_title, answer_content);
      if(result == 1) {
         return "수정 성공";
      }else {
         return "수정 실패";
      }
   }
   
   //관리자 페이지 Q & A 답변 삭제
   @PostMapping("/manage_answer_delete")
   public String manageAnswerDelete(@RequestBody Map map) {
      String answer_id_str = map.get("answer_id").toString();
      Long answer_id = Long.valueOf(answer_id_str);
      int result = manageService.manageAnswerDelete(answer_id);
      if(result == 1) {
         return "삭제 성공";
      }else {
         return "삭제 실패";
      }
   }

}
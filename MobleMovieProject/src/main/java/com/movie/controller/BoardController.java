package com.movie.controller;

import java.awt.print.Printable;
import java.nio.channels.GatheringByteChannel;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.movie.service.BoardService;
import com.movie.vo.AnswerVo;
import com.movie.vo.MemberVo;
import com.movie.vo.NoticeVo;
import com.movie.vo.QuestionVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("board")
public class BoardController {
   @Autowired
   private BoardService boardService;
   
   //공지사항 리스트
   @GetMapping("/notice")
   public List<Map<String, Object>> noticeList(){
      return boardService.noticeList();
   }
   
   //공지사항 세부내용
   @GetMapping("/notice_detail")
   public Map noticeDetail(@RequestParam("id")Long notice_id){
      boardService.countView(notice_id); //조회 수
      Map input = boardService.noticeDetail(notice_id);
      return input;
   }

   
   //Q & A 리스트
   @GetMapping("/question_list")
   public List<Map<String,Object>> questionList() {
      return boardService.questionList();
   }
   
   //Q & A 세부내용
   @GetMapping("/question_detail")
   public Map questionDetail(@RequestParam("id")Long question_id) {
      Map input = boardService.questionView(question_id);   
      return input;
   }
   //답변
   @GetMapping("/answer_detail")
   public Map answerDetail(@RequestParam("id")Long question_id) {
      Map input = boardService.answerView(question_id);
      return input;
   }

   //Q & A 질문 추가
   @PostMapping("/question_add")
   public String questionAddTest(@RequestBody Map map) {
      String member_id_str = map.get("member_id").toString();
      String category_id_str = map.get("category_id").toString();
      String question_title = map.get("question_title").toString();
      String question_content = map.get("question_content").toString();
      
      Long member_id = Long.valueOf(member_id_str);
      Long category_id = Long.valueOf(category_id_str);
      
      boardService.questionAdd(member_id, category_id, question_title, question_content);
      return "질문 작성 완료";
   }
   
   //Q & A 질문 수정
    @PostMapping("/question_update")
    public String questionUpdate(@RequestBody Map map) {
       String member_id_str = map.get("member_id").toString();
       String question_id_str = map.get("question_id").toString();
       String category_id_str = map.get("category_id").toString();
       String question_title = map.get("question_title").toString();
       String question_content = map.get("question_content").toString();
       
       Long member_id = Long.valueOf(member_id_str);
       Long question_id = Long.valueOf(question_id_str);
       Long category_id = Long.valueOf(category_id_str);
       
       int result = boardService.questionUpdate(member_id, question_id, category_id, question_title, question_content);
       if(result == 1) {
         return "수정 성공";
        }else {
            return "수정 권한이 없습니다.";
         }
    }
   
   //Q & A 질문 삭제
    @PostMapping("/question_delete")
    public String questionDelete(@RequestBody Map map) {
       String member_id_str = map.get("member_id").toString();
       String question_id_str = map.get("question_id").toString();
       
       Long member_id = Long.valueOf(member_id_str);
       Long question_id = Long.valueOf(question_id_str);
       int result = boardService.questionDelete(member_id,question_id);
       if(result == 1) {
          return "삭제 성공";
       }else {
    	   return "삭제 권한이 없습니다.";
       }
  
       
    }
   
}
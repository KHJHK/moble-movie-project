package com.movie.vo;



import lombok.Data;

@Data
public class AnswerVo {
	private Long answer_id;
	private Long question_id;
	private Long member_id;
	private String member_nickname;
	private String answer_reg_date;
	private String answer_title;
	private String answer_content;
}

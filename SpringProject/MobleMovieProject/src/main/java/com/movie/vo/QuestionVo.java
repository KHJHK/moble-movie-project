package com.movie.vo;



import lombok.Data;

@Data
public class QuestionVo {
	private Long question_id;
	private Long member_id;
	private String member_account;
	private Long category_id;
	private String category_name;
	private String question_reg_date;
	private String question_title;
	private String question_content;
	private String question_flag;
}

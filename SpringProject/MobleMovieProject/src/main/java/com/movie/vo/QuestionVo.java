package com.movie.vo;

import java.time.LocalDate;

import lombok.Data;

@Data
public class QuestionVo {
	private Long question_id;
	private MemberVo member_id;
	private CategoryVo category_id;
	private LocalDate question_reg_date;
	private String question_title;
	private String question_content;
}

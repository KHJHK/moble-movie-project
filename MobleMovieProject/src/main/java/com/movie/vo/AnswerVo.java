package com.movie.vo;

import java.time.LocalDate;

import lombok.Data;

@Data
public class AnswerVo {
	private Long answer_id;
	private QuestionVo question_id;
	private LocalDate answer_reg_date;
	private String answer_title;
	private String answer_content;
}

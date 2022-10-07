package com.movie.vo;

import java.time.LocalDate;

import lombok.Data;

@Data
public class FaqVo {
	private Long faq_id;
	private CategoryVo category_id;
	private LocalDate faq_reg_date;
	private String faq_title;
	private String faq_content;
	private Integer faq_count;
}

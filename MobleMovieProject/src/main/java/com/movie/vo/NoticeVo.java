package com.movie.vo;

import java.time.LocalDate;

import lombok.Data;

@Data
public class NoticeVo {
	private Long notice_id;
	private MemberVo member_id;
	private CategoryVo category_id;
	private LocalDate notice_reg_date;
	private String notice_title;
	private String notice_content;
	private Integer notice_count;
}

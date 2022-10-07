package com.movie.vo;

import lombok.Data;

@Data
public class NoticeVo {
	private Long notice_id;
	private MemberVo member_id;
	private CategoryVo category_id;
	private String category_name;
	private String notice_reg_date;
	private String notice_title;
	private String notice_content;
	private int notice_count;
}

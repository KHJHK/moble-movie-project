package com.movie.vo;

import lombok.Data;

@Data
public class NoticeVo {
	private Long notice_id;
	private Long member_id;
	private String member_nickname;
	private Long category_id;
	private String category_name;
	private String notice_reg_date;
	private String notice_title;
	private String notice_content;
	private int notice_count;
	private String notice_flag;
}

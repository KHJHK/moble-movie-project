package com.movie.vo;

import java.sql.Timestamp;
import java.time.LocalDate;

import lombok.Data;

@Data
public class MemberVo {
	private Long member_id;
	private String member_account;
	private String member_pw;
	private String member_email;
	private String member_name;
	private Integer member_auth;
	private String member_nickname;
	private Timestamp member_birth;
	private LocalDate member_reg_date;
	private LocalDate member_modify_date;

}

package com.movie.vo;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Data;

@Data
public class MemberVo implements UserDetails{
	private Long member_id;
	private String member_account;
	private String member_pw;
	private String member_email;
	private String member_name;
	private String member_auth;
	private String member_nickname;
	private String member_birth;
	private String member_reg_date;
	private String member_modify_date;
	private int member_code;
	
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return Collections.singletonList(new SimpleGrantedAuthority(this.member_auth));
	}
	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return this.member_pw;
	}
	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return this.member_account;
	}
	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}

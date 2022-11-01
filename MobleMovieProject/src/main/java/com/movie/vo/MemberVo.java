package com.movie.vo;

import java.util.ArrayList;
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
		String member_auth = this.member_auth;
		
		Collection<GrantedAuthority> collect = new ArrayList<>();
		collect.add(new GrantedAuthority() {
			
			@Override
			public String getAuthority() {
				// TODO Auto-generated method stub
				return member_auth;
			}
		});
		return collect;
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

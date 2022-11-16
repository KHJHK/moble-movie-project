package com.movie.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import com.movie.jwt.JwtAccessDeniedHandler;
import com.movie.jwt.JwtAuthenticationEntryPoint;
import com.movie.jwt.JwtFilter;
import com.movie.jwt.TokenProvider;
import com.movie.service.MemberService;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter{
    @Autowired
    private MemberService memberService;
    
    @Autowired
    private JwtFilter jwtFilter;
    
    @Autowired
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(memberService).passwordEncoder(new BCryptPasswordEncoder());
    }
    
    @SuppressWarnings("deprecation")
	@Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    } 
	
    @Override
    protected void configure(HttpSecurity http) throws Exception{
    	
    	http
    		.httpBasic().disable() // security에서 기본으로 생성하는 login페이지 사용 안 함 
    		.csrf().disable() // csrf 사용 안 함 == REST API 사용하기 때문에  
    		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)	// JWT인증사용하므로 세션 사용 안함
    		  .and()
            .authorizeRequests() // 해당 메소드 아래는 각 경로에 따른 권한을 지정할 수 있다.
//            .antMatchers("/manage/**", "/movie/indexMovie").hasAuthority("ROLE_ADMIN") // 괄호의 권한을 가진 유저만 접근가능, ROLE_가 붙어서 적용 됨. 즉, 테이블에 ROLE_권한명 으로 저장해야 함.
//            .antMatchers("/member/mypage", "/board/question_add", "/board/question_update", "/board/question_delete", "/ticketing").hasAnyAuthority("ROLE_ADMIN" , "ROLE_USER")
            .anyRequest().permitAll()

            .and()
    		  	.exceptionHandling()
    		  	.authenticationEntryPoint(new JwtAuthenticationEntryPoint())
    		  	.accessDeniedHandler(new JwtAccessDeniedHandler())
    		  .and()
    		  	.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
    }
}

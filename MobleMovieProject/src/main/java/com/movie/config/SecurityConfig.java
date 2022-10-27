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
    		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)	// JWT인증사용하므로 세션 사용  함
    		  .and()
            .authorizeRequests() // 해당 메소드 아래는 각 경로에 따른 권한을 지정할 수 있다.
            .antMatchers("/" , "/member/login" , "/member/service" , "/resources/**" , "/create").permitAll() // 로그인 권한은 누구나, resources파일도 모든권한
//            .antMatchers("/admin").hasRole("ADMIN") // 괄호의 권한을 가진 유저만 접근가능, ROLE_가 붙어서 적용 됨. 즉, 테이블에 ROLE_권한명 으로 저장해야 함.
//            .antMatchers("/user").hasRole("USER")
//            .antMatchers("/member").hasRole("MEMBER")
//            .anyRequest().authenticated()  //  로그인된 사용자가 요청을 수행할 떄 필요하다  만약 사용자가 인증되지 않았다면, 스프링 시큐리티 필터는 요청을 잡아내고 사용자를 로그인 페이지로 리다이렉션 해준다.
            .and()
    		  	.exceptionHandling().authenticationEntryPoint(new JwtAuthenticationEntryPoint())
    		  .and()
    		  	.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
    	
    	
    	
    	
    	//시큐리티만 적용 버전
//        http
//            .authorizeRequests() // 해당 메소드 아래는 각 경로에 따른 권한을 지정할 수 있다.
//                .antMatchers("/" , "/member/login" , "/member/service" , "/resources/**" , "/create").permitAll() // 로그인 권한은 누구나, resources파일도 모든권한
////                .antMatchers("/admin").hasRole("ADMIN") // 괄호의 권한을 가진 유저만 접근가능, ROLE_가 붙어서 적용 됨. 즉, 테이블에 ROLE_권한명 으로 저장해야 함.
////                .antMatchers("/user").hasRole("USER")
////                .antMatchers("/member").hasRole("MEMBER")
////                .anyRequest().authenticated()  //  로그인된 사용자가 요청을 수행할 떄 필요하다  만약 사용자가 인증되지 않았다면, 스프링 시큐리티 필터는 요청을 잡아내고 사용자를 로그인 페이지로 리다이렉션 해준다.
//                .and()
//            .formLogin() // 하위에 내가 직접 구현한 로그인 폼, 로그인 성공시 이동 경로 설정 가능. , 로그인 폼의 아이디,패스워드는 username, password로 맞춰야 함
//                        .loginPage("/member/login") // 로그인이 수행될 경로.
//                        .loginProcessingUrl("/member/login_proc")// 로그인form의  action과 일치시켜주어야 함.
//                        .defaultSuccessUrl("/member/login_success") // 로그인 성공 시 이동할 경로.
//                        .failureUrl("/member/login_fail") // 인증에 실패했을 때 보여주는 화면 url, 로그인 form으로 파라미터값 error=true로 보낸
////                .permitAll()
//                        .and()
//                        .logout()
//                        .logoutSuccessUrl("/logout") // 로그아웃 성공시 리다이렉트 주소
//                        .invalidateHttpSession(true) // 로그아웃 이후 세션 전체 삭제 여부
//                        .deleteCookies("JSESSIONID")
//                        .and()
//                        .csrf().disable();		//로그인 창
//
////             .exceptionHandling()
////                 .accessDeniedPage("/accessDenied_page"); // 권한이 없는 대상이 접속을시도했을 때
    }
}

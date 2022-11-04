package com.movie.jwt;

import java.io.Serializable;
import java.util.Base64;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.movie.service.MemberService;
import com.movie.vo.MemberVo;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;



@Component
public class TokenProvider implements Serializable{
	
	@Value("${jwt.secret}")
    private String secretKey;
	public long jwtTokenMilisecond = 5 * 60 * 60;
    
	@PostConstruct
    protected void init() {
		secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    // Jwt 토큰 생성
    public String createToken(Map<String, Object> claims, String subject) {
      Date now = new Date();
      return Jwts.builder()
            .setClaims(claims) // 데이터
            .setSubject(subject) //서브젝트 세팅
            .setIssuedAt(now) // 토큰 발행일자
            .setExpiration(new Date(now.getTime() + jwtTokenMilisecond)) //시간
            .signWith(SignatureAlgorithm.HS256, secretKey) // 암호화 알고리즘, secret값 세팅
            .compact();
    }
    
    //클레임 항목 정보
    public String getMemberIdToken(String token) {
    	String userId = String.valueOf(extractAllClaims(token).get("member_id"));
    	return userId;
    }
    public String getMemberAccountToken(String token) {
    	String username = String.valueOf(extractAllClaims(token).get("member_account"));
    	return username;
    }
    public String getMemberPwToken(String token) {
    	String username = String.valueOf(extractAllClaims(token).get("member_pw"));
    	return username;
    }
    public String getMemberAuthToken(String token) {
    	String username = String.valueOf(extractAllClaims(token).get("member_auth"));
    	return username;
    }
    public String getMemberNameToken(String token) {
    	String username = String.valueOf(extractAllClaims(token).get("member_name"));
    	return username;
    }
    public String getMemberNicknameToken(String token) {
    	String username = String.valueOf(extractAllClaims(token).get("member_nickname"));
    	return username;
    }
    public String getMemberEmailToken(String token) {
    	String username = String.valueOf(extractAllClaims(token).get("member_email"));
    	return username;
    }
    public String getMemberBirthToken(String token) {
    	String username = String.valueOf(extractAllClaims(token).get("member_birth"));
    	return username;
    }
    public String getMemberRegDateToken(String token) {
    	String username = String.valueOf(extractAllClaims(token).get("member_reg_date"));
    	return username;
    }
    public String getMemberModifyDateToken(String token) {
    	String username = String.valueOf(extractAllClaims(token).get("member_modify_date"));
    	return username;
    }

    
	// claim 정보 가져오기
	public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = extractAllClaims(token);
		return claimsResolver.apply(claims);
	}
	// body 정보 가저오기
	private Claims extractAllClaims(String token) {
		return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
	}
	
    //유저 정보
    public String generateToken(MemberVo memberVo,String user) {
    	Map<String,Object> claims = new HashMap<>();
    	claims.put("member_id", memberVo.getMember_id());
    	claims.put("member_account", memberVo.getMember_account());
    	claims.put("member_pw", memberVo.getMember_pw());
    	claims.put("member_auth", memberVo.getMember_auth());
    	claims.put("member_name", memberVo.getMember_name());
    	claims.put("member_nickname", memberVo.getMember_nickname());
    	claims.put("member_email", memberVo.getMember_email());
    	claims.put("member_birth", memberVo.getMember_birth());
    	claims.put("member_reg_date", memberVo.getMember_reg_date());
    	claims.put("member_modify_date", memberVo.getMember_modify_date());
    	
    	return createToken(claims,user);
    }
    
    //토큰 들어있는 유저의 정보 확인
	public boolean validateToken(String token, UserDetails userDetails) {
		// TODO Auto-generated method stub
		final String username = getMemberAccountToken(token);
		return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
	}
	
	//subject
	public String extractUsername(String token) {
		// TODO Auto-generated method stub
		return extractClaim(token, Claims::getSubject);
	}

	  // 토큰 유효시간 추출
    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }
    // 토큰 유효시간 확인
    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }
	

}
package com.movie.apiControl;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.nio.charset.Charset;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLSession;

//API URL을 받아서 JSON 형태로 저장해주는 Class
public class JsonReader {
	public static StringBuilder callURL(String myURL) { // 속도를 높히기 위해 static 사용
		System.out.println("Requeted URL:" + myURL);
		
		//String을 통해 연산시 String 객체의 할당/해제 반복으로 메모리 낭비
		//StringBuilder를 통해 이를 개선
		StringBuilder stringBuilder = new StringBuilder();
		
		//URLConnection - URL과 관랜된 모든 클래스의 수퍼클래스
		//URLConnection은 URL에 대한 API 제공하는 추상클래스
		//URL을 통해 받은 정보(API 같은거)를 통해 인스턴스 획득
		URLConnection urlConn = null;
		InputStreamReader in = null;
		
		//error : Caused by: javax.net.ssl.SSLPeerUnverifiedException: Hostname not verified:
		HostnameVerifier allHostsVaild = new HostnameVerifier() {
			@Override
			public boolean verify(String hostname, SSLSession session) {
				// 특정 hostname만 승인
				return true;
			}
		};
		
		HttpsURLConnection.setDefaultHostnameVerifier(allHostsVaild);
		
		try {
			URL url = new URL(myURL);
			urlConn = url.openConnection();
			
			//연결 시간 초과 값 설정
			if(urlConn != null) {
				urlConn.setReadTimeout(60*100);
			}
			//입력 스트림이 비어있을 경우
			if(urlConn != null && urlConn.getInputStream() != null) {
				//charset 문자 집합 인코딩을 통해 urlConn.etinputStream을 문자스트림으로 변환한 객체 생성
				in = new InputStreamReader(urlConn.getInputStream(), Charset.defaultCharset());
				//주어진 문자 입력 스트림 inputStream에 대해 기본 크기의 버퍼를 갖는 객체 생성
				BufferedReader bufferedReader = new BufferedReader(in);
				
				if(bufferedReader != null) {
					int cp;
					while((cp = bufferedReader.read()) != -1) {
						stringBuilder.append((char)cp);
					}
					bufferedReader.close();
				}
			}
			in.close();
		}catch(Exception e) {
			throw new RuntimeException("Exception URL:" + myURL, e);
		}
		return stringBuilder;
	}
}

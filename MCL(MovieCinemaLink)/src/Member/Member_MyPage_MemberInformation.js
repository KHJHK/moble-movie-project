// LoginMain.js
import axios from "axios";
import React from "react";
import jwtDecode from "jwt-decode";
import { useState } from "react";

const LoginMain = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  const decoded = jwtDecode(JSON.stringify(localStorage.getItem("token")));

  const [pw, setPw] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [pwCf, setPwCf] = useState("");

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isPwCf, setIsPwCf] = useState(false);

  // 오류 메시지
  const [emailMessage, setEmailMessage] = useState("");
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [pwCfMessage, setPwCfMessage] = useState("");



  const onEmail = (e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸습니다.");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다.");
      setIsEmail(true);
    }
  }

  const onNickname = (e) => {
    const nicknameCurrent = e.target.value;
    setNickname(nicknameCurrent);
  }

  const onPw = (e) => {
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const pwCurrent = e.target.value;
    setPw(pwCurrent);

    if (!pwRegex.test(pwCurrent)) {
      setPwMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.");
      setIsPw(false);
    } else {
      setPwMessage("안전한 비밀번호입니다.");
      setIsPw(true);
    }
  };

  const onPwCk = (e) => {
    const pwCfCurrent = e.target.value;
    setPwCf(pwCfCurrent);
    if (pw === pwCfCurrent) {
      setPwCfMessage("비밀번호가 같습니다.");
      setIsPwCf(true);
    } else {
      setPwCfMessage("비밀번호가 다릅니다.");
      setIsPwCf(false);
    }
  };

  async function Reset() {
    try {
      const response = await axios.post(`http://localhost:80/member/member_update`, {
        member_pw: pw,
        member_nickname: nickname,
        member_email: email,
        member_account: decoded.member_account,
      });
      console.log(response.data);
      alert(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            <strong>정보수정</strong>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <br />
            <input type="text" placeholder="이메일"
              onChange={onEmail} />
            {email.length > 0 && (
              <p className={`message ${isEmail ? "success" : "error"}`}>
                {emailMessage}
              </p>
            )}
            <br />
            <input type="text" placeholder="닉네임"
              onChange={onNickname} />
            {nickname.length > 0 && (
              <p className={`message ${isNickname ? "success" : "error"}`}>
                {nicknameMessage}
              </p>
            )}
            <br />
            <input type="text" placeholder="비밀번호"
              onChange={onPw} />
            {pw.length > 0 && (
              <p className={`message ${isPw ? "success" : "error"}`}>
                {pwMessage}
              </p>
            )}
            <br />
            <input type="text" placeholder="비밀번호확인"
              onChange={onPwCk} />
            {pwCf.length > 0 && (
              <p className={`message ${isPwCf ? "success" : "error"}`}>
                {pwCfMessage}
              </p>
            )}
            <br />
            <br />
          </main>
          <br />
          {/* <button className="close">로그인</button> */}
          {/* <button className="close">회원가입</button> */}
          <button
            disabled={!(isEmail && isNickname && isPw && isPwCf)}
            onClick={() => Reset()}
          >
            저장
          </button>
          <button className="close" onClick={close}>
            닫기
          </button>
        </section>
      ) : null}
    </div>
  );
};

export default LoginMain;

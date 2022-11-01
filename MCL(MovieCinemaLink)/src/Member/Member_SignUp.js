// Member_SignUp.js
import React, { useState } from "react";
import { TextField } from "@material-ui/core";
// import { PasswordField } from "material-ui-password";
// import PasswordField from "material-ui-password-field";
const Member_SignUp = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  //이름, 생년월일, 이메일, 아이디, 비밀번호, 비밀번호 확인, 닉네임
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCf, setPwCf] = useState("");
  const [nickname, setNickname] = useState("");

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [pwCfMessage, setPwCfMessage] = useState("");

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isPwCf, setIsPwCf] = useState(false);

  // 조건문
  const onNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage("2글자 이상 5글자 미만으로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다.");
      setIsName(true);
    }
  };

  const onEmailChange = (e) => {
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
  };
  const onIdChange = (e) => {
    const idRegex = /[~!@#$%^&*()_+|<>?:{}.,/;='"|a-z|A-Z|0-9]/;
    const idCurrent = e.target.value;
    setId(idCurrent);

    if (!idRegex.test(idCurrent)) {
      setIdMessage("영문, 숫자만 입력 가능합니다.");
      setIsId(false);
    } else {
      setIdMessage("올바른 아이디 형식입니다.");
      setIsId(true);
    }
  };
  const onPwChange = (e) => {
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
  const onPwCfChange = (e) => {
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

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section className="customStyles">
          <div className="Modal_fullTitle">
            <h4>회원가입</h4>
            {header}
            <button className="x_button" onClick={close}>&times;</button>
          </div>

          <form>
            <main>
              <br />
              <div className="formbox">
                <label>이름</label>
                <TextField
                  text="이름"
                  type="name"
                  typeName="name"
                  variant={"outlined"}
                  onChange={onNameChange}
                  placeholder="이름"
                  size="small"
                />
                {name.length > 0 && (
                  <p className={`message ${isName ? "success" : "error"}`}>
                    {nameMessage}
                  </p>
                )}
              </div>
              <br />

              <div className="formbox">
                <label>
                  생년월일
                  <input
                    type="date"
                    name="date"
                    id="date"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </label>
              </div>
              <br />

              <div>
                <label className="formbox">
                  E-mail
                  <TextField
                    text="이메일"
                    type="email"
                    typeName="email"
                    variant="outlined"
                    onChange={onEmailChange}
                    placeholder="이메일"
                    size="small"
                  />
                  {email.length > 0 && (
                    <p className={`message ${isEmail ? "success" : "error"}`}>
                      {emailMessage}
                    </p>
                  )}
                </label>
              </div>
              <br />

              <div>
                <label>
                  아이디
                  <TextField
                    text="ID"
                    type="id"
                    typeName="id"
                    variant="outlined"
                    onChange={onIdChange}
                    placeholder="아이디"
                    size="small"
                  />
                  {id.length > 0 && (
                    <p className={`message ${isId ? "success" : "error"}`}>
                      {idMessage}
                    </p>
                  )}
                </label>
              </div>
              <br />

              <div>
                <label>
                  비밀번호
                  <TextField
                    onChange={onPwChange}
                    text="PW"
                    type={"password"}
                    typeName="pw"
                    variant="outlined"
                    placeholder="비밀번호"
                    size="small"
                  />
                  {pw.length > 0 && (
                    <p className={`message ${isPw ? "success" : "error"}`}>
                      {pwMessage}
                    </p>
                  )}
                </label>
              </div>
              <br />

              <div>
                <label>
                  비밀번호확인
                  <TextField
                    onChange={onPwCfChange}
                    text="PWCF"
                    type={"password"}
                    typeName="pwCf"
                    variant="outlined"
                    placeholder="비밀번호확인"
                    size="small"
                  />
                  {pwCf.length > 0 && (
                    <p className={`message ${isPwCf ? "success" : "error"}`}>
                      {pwCfMessage}
                    </p>
                  )}
                </label>
              </div>
              <br />

              <div>
                <label>
                  닉네임
                  <TextField
                    text="nickname"
                    type={"nickname"}
                    variant="outlined"
                    typeName="nickname"
                    placeholder="닉네임"
                    onChange={(e) => setNickname(e.target.value)}
                    size="small"
                  />
                </label>
                <button value={"중복확인"} />
              </div>
              <br />
              {props.children}
            </main>

            <br />
            <button
              type="submit"
              disabled={!(isName && isEmail && isId && isPw && isPwCf)}
            >
              로그인
            </button>
          </form>
          <button className="close" onClick={close}>
            닫기
          </button>
        </section>
      ) : null}
    </div>
  );
};

export default Member_SignUp;

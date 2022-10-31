// Member_Login.js
import React, { useCallback, useState } from "react";
import Member_SignUp from "./Member_SignUp";

const Member_Login = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  const [modalOpenSignUp, setModalOpenSignUp] = useState(false);

  const openMember_SignUp = () => {
    setModalOpenSignUp(true);
  };
  const closeMember_SignUp = () => {
    setModalOpenSignUp(false);
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <div className="customStyles">
          <div className="Modal_fullTitle">
            <h4>로그인</h4>
            {header}
            <button className="close_btn" onClick={close}>&times;</button>
          </div>

          <main>
            <br />
            <input type="text" placeholder="아이디" />
            <br />

            <input type="text" placeholder="비밀번호" />
            <br />
            <text>아이디 / 비밀번호 찾기</text>
            <br />
            {props.children}
          </main>

          <br />
          <button className="close">로그인</button>
          <React.Fragment>
            <button className="close" onClick={openMember_SignUp}>
              회원가입
            </button>
            <Member_SignUp
              open={modalOpenSignUp}
              close={closeMember_SignUp}
            ></Member_SignUp>
          </React.Fragment>
          <button className="close" onClick={close}>
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Member_Login;

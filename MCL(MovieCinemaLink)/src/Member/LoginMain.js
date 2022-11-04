// LoginMain.js
import React from "react";

const LoginMain = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <div className="customStyles">
          <div className="Modal_fullTitle">
            <h4>회원가입</h4>
            {header}
            <button className="x_button" onClick={close}>
              &times;
            </button>
          </div>
          <main>
            <br />
            <input type="text" placeholder="이름" />
            <br />
            <input type="text" placeholder="아이디" />
            <br />
            <input type="text" placeholder="비밀번호" />
            <br />
            <input type="text" placeholder="비밀번호확인" />
            <br />
            <br />
            {props.children}
          </main>
          <br />
          <button className="close">로그인</button>
          <button className="close">회원가입</button>
          <button className="close" onClick={close}>
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default LoginMain;

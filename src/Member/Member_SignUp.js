// Member_SignUp.js
import React, { useState } from "react";
import "./Member_LoginSignUp.css";

const Member_SignUp = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            <strong>회원가입</strong>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <input type="text" placeholder="이름" />
            <p></p>
            <input type="text" placeholder="아이디" />
            <p></p>
            <input type="text" placeholder="비밀번호" />
            <p></p>
            <input type="text" placeholder="비밀번호확인" />
            <p></p>

            {props.children}
          </main>
          <footer>
            <button className="close">로그인</button>
            <button className="close">회원가입</button>
            <button className="close" onClick={close}>
              닫기
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Member_SignUp;

// Questions_modal.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Questions_modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  const [modalOpenSignUp, setModalOpenSignUp] = useState(false);

  const openModalSignup = () => {
    setModalOpenSignUp(true);
  };
  const closeModalSignUp = () => {
    setModalOpenSignUp(false);
  };
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modalf"}>
      {open ? (
        <section>
          <header>
            <strong>알림</strong>

            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <p>Q & A 등록완료</p>
            {props.children}
          </main>
          <br />

          <Link to="/Questions_Questions">
            <button>확인</button>
          </Link>
          {/* <button className="close" onClick={close}>
            확인
          </button> */}
        </section>
      ) : null}
    </div>
  );
};

export default Questions_modal;

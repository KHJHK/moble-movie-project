// Member_MyPage_MemberInformation_PasswordConfirmation.js
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Member_MyPage_MemberInformation_PasswordConfirmation.css";
import Member_MyPage_MemeberInfomation from "../Member/Member_MyPage_MemberInformation";

const Member_MyPage_MemberInformation_PasswordConfirmation = (props) => {
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
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            <strong>비밀번호 확인</strong>

            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <br />
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              id="password"
            />
            <br />
            <br />

            {props.children}
          </main>
          <br />
          {/* <Link to="/Member_MyPage_MemberInformation"> */}
          <React.Fragment>
            <button className="close" onClick={openModalSignup}>
              확인
            </button>
            <Member_MyPage_MemeberInfomation
              open={modalOpenSignUp}
              close={closeModalSignUp}
            ></Member_MyPage_MemeberInfomation>
          </React.Fragment>
          {/* </Link> */}

          <button className="close" onClick={close}>
            닫기
          </button>
        </section>
      ) : null}
    </div>
  );
};

export default Member_MyPage_MemberInformation_PasswordConfirmation;

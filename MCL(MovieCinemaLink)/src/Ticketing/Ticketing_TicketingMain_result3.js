// Member_MyPage_MemberInformation_PasswordConfirmation.js
import React, { useState } from "react";
// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const Ticketing_Ticketing_TicketingMain_result = (props) => {
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
            <strong>안내문</strong>
            <Link to="/Member_MyPage">
              <button className="close" onClick={close}>
                &times;
              </button>
            </Link>
          </header>
          <main>
            <br />
            <p id="resulttext">결제가 완료되었습니다.</p>
            <br />
            <br />

            {props.children}
          </main>
          <br />
          {/* <Link to="/Member_MyPage_MemberInformation"> */}
          <Link to="/Member_MyPage">
            <button className="close" onClick={close}>
              확인
            </button>
          </Link>

          {/* </Link> */}
        </section>
      ) : null}
    </div>
  );
};

export default Ticketing_Ticketing_TicketingMain_result;

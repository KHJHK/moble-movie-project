// Ticketing_TicketingMain_result3.js
import React, { useState } from "react";
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
        <div className="customStyles">
          <div className="Modal_fullTitle">
            <h4>안내문</h4>
            <Link to="/Member_MyPage">
              <button className="x_button" onClick={close}>
                &times;
              </button>
            </Link>
          </div>
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
        </div>
      ) : null}
    </div>
  );
};

export default Ticketing_Ticketing_TicketingMain_result;

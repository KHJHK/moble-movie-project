// Member_MyPage_MemberInformation_PasswordConfirmation.js
import React, { useState } from "react";
// import { Link } from "react-router-dom";

import Ticketing_TicketingMain_result2 from "./Ticketing_TicketingMain_result2";
const Ticketing_Ticketing_TicketingMain_result = (props) => {
  var moviecheck = localStorage.getItem("moviecheck");
  var movieRegion = localStorage.getItem("movieRegion");
  var movieCinema = localStorage.getItem("movieCinema");
  var movieDate = localStorage.getItem("movieDate");
  var movieTime = localStorage.getItem("movieTime");
  var movieSeat = localStorage.getItem("movieSeat");

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
            <strong>영화예매확인</strong>

            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <br />
            <p>영화선택 : {moviecheck} </p>
            <p>선택지역 : {movieRegion} </p>
            <p>극장위치 : {movieCinema} </p>
            <p>상영날짜 : {movieDate} </p>
            <p>상영시간 : {movieTime} </p>
            <p>예매좌석 : {movieSeat} </p>
            <br />
            <p>결제를 진행하시겠습니까? </p>

            {props.children}
          </main>
          <br />
          {/* <Link to="/Member_MyPage_MemberInformation"> */}
          <React.Fragment>
            <button className="close" onClick={openModalSignup}>
              결제하기
            </button>
            <Ticketing_TicketingMain_result2
              open={modalOpenSignUp}
              close={closeModalSignUp}
            ></Ticketing_TicketingMain_result2>
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

export default Ticketing_Ticketing_TicketingMain_result;

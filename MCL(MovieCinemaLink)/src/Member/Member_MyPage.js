// Member_MyPage.js
import React from "react";
import { useState, useRef } from "react";
import "./Member_MyPage.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import submit, { ads2 } from "./Member_MyPage_resign";
import Member_MyPage_MemberInformation_PasswordConfirmation from "./Member_MyPage_MemberInformation_PasswordConfirmation.js";

import Header from "../Main/Header";
import Footer from "../Main/Footer";

const Member_MyPage = () => {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";
  var moviecheck = localStorage.getItem("moviecheck");
  var movieRegion = localStorage.getItem("movieRegion");
  var movieCinema = localStorage.getItem("movieCinema");
  var movieDate = localStorage.getItem("movieDate");
  var movieTime = localStorage.getItem("movieTime");
  var movieSeat = localStorage.getItem("movieSeat");
  var movieporster = localStorage.getItem("movieporster");
  const [modalOpenLogin, setModalOpenLogin] = useState(false);
  // const [modalOpenSignUp, setModalOpenSignUp] = useState(false);
  const openModalLogin = () => {
    setModalOpenLogin(true);
  };
  const closeModalLogin = () => {
    setModalOpenLogin(false);
  };

  // const openModalSignup = () => {
  //   setModalOpenSignUp(true);
  // };
  // const closeModalSignUp = () => {
  //   setModalOpenSignUp(false);
  // };

  const [imageUrl, setImageUrl] = useState(null);
  const imgRef = useRef();

  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    console.log(file);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      console.log("이미지주소", reader.result);
    };
  };

  function setInnerHTML() {
    const element = document.getElementById("Ticketcenter");
    element.Reservation_information += "<div>InnerHTML<div>";
  }

  const onClickFileBtn = (e) => {
    imgRef.current.click();
  };

  return (
    <div>
      <Header />
      <div className="Member_MyPage">
        <h3>마이페이지</h3>
        <div className="profileinformation">
          <div className="Mypagepicture">
            <img
              src={imageUrl ? imageUrl : "./img/Mypagepicture.png"}
              id="profilepicture"
              alt="프로필 변경"
            />
          </div>

          <div className="profilename">
            <strong>이름</strong> : 양현후 <br />
            <strong>아이디</strong> : moble <br />
            <strong>생일</strong> : 00-01-01 <br />
            <strong>가입일</strong> : 00-01-01 <br />
            <strong>닉네임</strong> : BANG <br />
            <br />
            <button
              onClick={() => {
                onClickFileBtn();
              }}
            >
              프로필 변경
            </button>
          </div>

          <div className="iconspace">
            <React.Fragment>
              <input
                type="file"
                ref={imgRef}
                onChange={onChangeImage}
                style={{ display: "none" }}
              ></input>
            </React.Fragment>

            <React.Fragment>
              <div className="icon" onClick={openModalLogin}>
                <img
                  src="./img/icons8-lock-96.png"
                  alt="마이페이지 정보수정 아이콘"
                  id="Modifying-information"
                />

                <div className="iconname">
                  <strong>정보수정</strong>
                </div>
              </div>
              <Member_MyPage_MemberInformation_PasswordConfirmation
                open={modalOpenLogin}
                close={closeModalLogin}
              ></Member_MyPage_MemberInformation_PasswordConfirmation>
            </React.Fragment>

            <div className="icon">
              <img
                src="./img/icons8-delete-96.png"
                onClick={ads2}
                alt="마이페이지 회원탈퇴 아이콘"
                id="Modifying-information"
              />

              <div className="iconname">
                <strong>회원탈퇴</strong>
              </div>
            </div>

            <div
              className="icon"
              onClick={() =>
                window.open("https://entertain.naver.com/home", "_blank")
              }
            >
              <img
                src="./img/icons8-news-96.png"
                alt="마이페이지 무비뉴스 아이콘"
                id="Modifying-information"
              />
              <div className="iconname">
                <strong>뮤비뉴스</strong>
              </div>
            </div>
          </div>
        </div>

        {/* My 예매 정보 시작*/}
        <h3>My 예매정보</h3>

        <div className="Ticketcenter">
          <div className="Reservation_information">
            <div className="Reservation_picter">
              <img
                src={IMG_BASE_URL + movieporster}
                alt="점검상태입니다"
                id="Reervation_picter"
              />
            </div>

            <div className="profilename">
              <p>영화선택 : {moviecheck} </p>
              <br />
              <p>선택지역 : {movieRegion} </p>
              <br />
              <p>극장위치 : {movieCinema} </p>
              <br />
              <p>상영날짜 : {movieDate} </p>
              <br />
              <p>상영시간 : {movieTime} </p>
              <br />
              <p>예매좌석 : {movieSeat} </p>
              <br />
              <button className="cancelBtn">예매취소</button>
            </div>
          </div>
        </div>
        {/* My 예매 정보 끝*/}
      </div>
      <Footer />
    </div>
  );
};
export default Member_MyPage;

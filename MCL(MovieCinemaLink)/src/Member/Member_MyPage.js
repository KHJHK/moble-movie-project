// Member_MyPage.js
import React from "react";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./Member_MyPage.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import submit, { ads2 } from "./Member_MyPage_resign";
import { deletePick } from "../Ticketing/Ticketing_Selectdoing";
import Member_MyPage_MemberInformation_PasswordConfirmation from "./Member_MyPage_MemberInformation_PasswordConfirmation.js";

import Header from "../Main/Header";
import Footer from "../Main/Footer";
import jwtDecode from "jwt-decode";

const Member_MyPage = (props) => {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

  const [modalOpenLogin, setModalOpenLogin] = useState(false);
  const [MypageTicket, setMypageTicket] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);

  // const [modalOpenSignUp, setModalOpenSignUp] = useState(false);
  const openModalLogin = () => {
    setModalOpenLogin(true);
  };
  const closeModalLogin = () => {
    setModalOpenLogin(false);
  };

  let localStorage = window.localStorage;
  // localStorage.getItem("token");

  const decoded = jwtDecode(JSON.stringify(localStorage.getItem("token")));

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

  const onClickFileButton = (e) => {
    imgRef.current.click();
  };

  useEffect(() => {
    let seat_id = localStorage.getItem("seat_id");
    axios
      .get(`http://localhost/member/mypage?member_id=${decoded.member_id}`)
      .then((response) => {
        setMypageTicket(response.data);
      });
    //console.log("useEffect 시간에 들어온 상황(setmovie_Time) : " + movie_id);
  }, []);

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
            <strong>이름</strong> : {decoded.member_name} <br />
            <strong>아이디</strong> : {decoded.member_account} <br />
            <strong>생일</strong> : {decoded.member_birth} <br />
            <strong>가입일</strong> : {decoded.member_reg_date} <br />
            <strong>닉네임</strong> : {decoded.member_nickname} <br />
            <br />
            <button
              onClick={() => {
                onClickFileButton();
              }}
            >
              프로필 변경
            </button>
          </div>

          {/* icon 아이콘 : 정보수정, 회원탈퇴, 무비뉴스 */}
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
          {MypageTicket.map((item) => {
            return (
              <div className="Reservation_information">
                <div className="Reservation_picter">
                  <img
                    src={IMG_BASE_URL + item.movie_poster_path}
                    alt="점검상태입니다"
                    id="Reervation_picter"
                  />
                </div>

                <div className="profilename">
                  <p>
                    <strong>영화선택</strong> : {item.movie_name}{" "}
                  </p>
                  <br />
                  <p>
                    <strong>선택지역</strong> : {item.cinema_location}{" "}
                  </p>
                  <br />
                  <p>
                    <strong>극장위치</strong> : {item.cinema_name}{" "}
                  </p>
                  <br />
                  <p>
                    <strong>상영날짜</strong> : {item.schedule_date}{" "}
                  </p>
                  <br />
                  <p>
                    <strong>상영시간</strong> :{" "}
                    {item.theater_name + "관 " + item.schedule_time}{" "}
                  </p>
                  <br />
                  <p>
                    <strong>예매좌석</strong> : {item.seat_name}{" "}
                  </p>
                  <br />
                  <button
                    onClick={(e) => {
                      deletePick(item.pick_id);
                    }}
                  >
                    예매취소
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* My 예매 정보 끝*/}
      </div>
      <Footer />
    </div>
  );
};
export default Member_MyPage;

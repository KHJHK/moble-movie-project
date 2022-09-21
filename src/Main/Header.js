import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import Member_Login from "../Member/Member_Login";
import Member_SignUp from "../Member/Member_SignUp";

const Header = () => {
  const [modalOpenLogin, setModalOpenLogin] = useState(false);
  const [modalOpenSignUp, setModalOpenSignUp] = useState(false);
  const openModalLogin = () => {
    setModalOpenLogin(true);
  };
  const closeModalLogin = () => {
    setModalOpenLogin(false);
  };

  const openMember_SignUp = () => {
    setModalOpenSignUp(true);
  };
  const closeMember_SignUp = () => {
    setModalOpenSignUp(false);
  };

  return (
    <header className="headerpart">
      <div className="firstpart">
        <img src="./toppicture.png" alt="상단 로고사진" id="toppicture" />

        <div class="TopMenu">
          <div className="TopMenu1">
            {/* <Link to="/Member_Login"> */}
            <React.Fragment>
              <strong onClick={openModalLogin}>로그인</strong>
              <Member_Login
            
                open={modalOpenLogin}
                close={closeModalLogin}
              ></Member_Login
            >
            </React.Fragment>
            {/* </Link> */}
          </div>
          <div className="TopMenu2">
            {/* <Link to="/Member_SignUp"> */}
            <React.Fragment>
              <strong onClick={openMember_SignUp}>회원가입</strong>
              <Member_SignUp
                open={modalOpenSignUp}
                close={closeMember_SignUp}
              ></Member_SignUp>
            </React.Fragment>
            {/* </Link> */}
          </div>
          <div className="TopMenu3">
            <Link to="/Member_MyPage">
              <strong> 마이페이지</strong>
            </Link>
          </div>
        </div>
      </div>

      <div class="maincenter">
        <div id="menu">
          <ul>
            <li>
              <a href="#">영화</a>
              <ul>
                <li id="smallmenu">
                  <Link to="/Movie_ScreeningMovie">현재 상영중인 영화</Link>
                </li>
                <li id="smallmenu">
                  <Link to="/Movie_ToBeScreened">상영 예정 영화</Link>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">예매</a>
              <ul>
                <li id="smallmenu">
                  <Link to="/Ticketing">예매하기</Link>
                </li>
                <li id="smallmenu">
                  <a href="#">상영시간표</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">극장</a>
              <ul>
                <li id="smallmenu">
                  <a href="#">영화관 위치정보</a>
                </li>
                <li id="smallmenu">
                  <a href="#">상영관</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">무비푸드</a>
              <ul>
                <li id="smallmenu">
                  <a href="#">팝콘</a>
                </li>
                <li id="smallmenu">
                  <a href="#">스낵</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">공지사항</a>
              <ul>
                <li id="smallmenu">
                  <a href="#">공지사항</a>
                </li>
                <li id="smallmenu">
                  <a href="#">Q&A</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

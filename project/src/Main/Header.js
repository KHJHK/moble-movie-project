import React from "react";
import "./Header.css";

const Header = () => {
  return (
      <header className="headerpart">
        <div className="firstpart">
          <img src="./toppicture.png" alt="상단 로고사진" id="toppicture" />

          <div class="TopMenu">
            <div className="TopMenu1">
              <strong>로그인</strong>
            </div>
            <div className="TopMenu2">
              <strong>회원가입</strong>
            </div>
            <div className="TopMenu3">
              <strong> 마이페이지</strong>
            </div>
          </div>
        </div>

        <div className="maincenter">
          <div id="menu">
            <ul>
              <li>
                <a href="#">영화</a>
                <ul>
                  <li id="smallmenu">
                    <a href="#">현재 상영중인 영화</a>
                  </li>
                  <li id="smallmenu">
                    <a href="#">상영 예정 영화</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">예매</a>
                <ul>
                  <li id="smallmenu">
                    <a href="#">예매하기</a>
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

      // {/* <div class="video">
      //   <div>
      //     <video
      //       class="background"
      //       src="background.mp4"
      //       autoplay
      //       muted
      //       loop
      //     ></video>
      //   </div>

      //   <div align="center">
      //     <video
      //       class="trailer"
      //       src="0jo.mp4"
      //       controls
      //       muted
      //       autoplay
      //       loop
      //     ></video>
      //   </div>
      // </div> */}
  );
};

export default Header;

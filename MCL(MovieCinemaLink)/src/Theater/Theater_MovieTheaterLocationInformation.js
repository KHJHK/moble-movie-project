// Theater_MovieTheaterLocationInformation.js;
import React, { useRef, useEffect } from "react";
import "./Theater_MovieTheaterLocationInformation.css";

import Footer from "../Main/Footer";
import Header from "../Main/Header";

import {
  areaclick,
  areaclick1,
  areaclick2,
  Theaterclick,
  Theaterclick1,
} from "./Theater_MovieTheaterLocationMovement";

const Location = () => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new window.kakao.maps.LatLng(
        36.99059842091486,
        127.08539400873366
      ),
      level: 3, //이미지 지도의 확대 레벨
    };

    var map = new window.kakao.maps.Map(container, options);

    var markerPosition = new window.kakao.maps.LatLng(
      36.99059842091486,
      127.08539400873366
    );

    // var marker = new window.kakao.maps.Marker({
    //   //이미지지도에 표시할 마커 생성
    //   position: markerPosition,
    // });

    // var infowindow = new window.kakao.maps.InfoWindow({
    //   content:
    //     // 말풍선
    //     '<div style="width:150px;color:#ff6347;text-align:center;padding:10px 0;font-size:20px";>MCL 평택점</div>',
    // });

    // infowindow.open(map, marker);
    // marker.setMap(map);
  }, []);

  return (
    <div>
      <div id="map" />
    </div>
  );
};

// 버튼 클릭 시 색깔
export function TimeClick(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
    document.querySelector(".TicketingSeat").style.display = "none";
    console.log("6");
  } else {
    for (var i = 0; i < SelectTI.length; i++) {
      SelectTI[i].classList.remove("clicked");
    }
    event.target.classList.add("clicked");
    document.querySelector(".TicketingSeat").style.display = "block";
  }
}

const Theater_MovieTheaterLocationInformation = () => (
  <div>
    <Header />
    <div className="Theater_MovieTheaterLocationInformation">
      <h3>영화관 위치정보</h3>

      <div className="Select">
        {/* 지역 선택 */}
        <div className="area">
          <h3>지역 선택</h3>

          <ul className="title_menu">
            <li id="list1" onClick={areaclick}>
              천안시
            </li>
            <li id="list2" onClick={areaclick1}>
              오산시
            </li>
            <li id="list3" onClick={areaclick2}>
              평택시
            </li>
          </ul>
        </div>

        {/* 상영관 선택 */}
        <div className="area2">
          <h3>상영관 선택</h3>

          <ul className="title_menu">
            <li id="Theater1" onClick={Theaterclick}>
              터미널점
            </li>
            <li id="Theater2" onClick={Theaterclick1}>
              시청점
            </li>
          </ul>
        </div>

        {/* 극장 위치 */}
        <div className="area3">
          <h3>극장 위치</h3>

          {/* 선택한 항목 */}
          <div className="SelectedItem">
            <ul>
              <li>
                <p id="areaText">선택해주세요</p>
              </li>
              <li>
                <p id="TheaterText">선택해주세요</p>
              </li>
              <li>
                <p id="resultText">선택해주세요</p>
              </li>
            </ul>
          </div>
          {Location()}
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default Theater_MovieTheaterLocationInformation;

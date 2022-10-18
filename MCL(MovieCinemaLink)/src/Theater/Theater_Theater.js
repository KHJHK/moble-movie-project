// Theater_Theater.js
import React from "react";
import "./Theater_Theater.css";

import Header from "../Main/Header";
import Footer from "../Main/Footer";

const Theater_Theater = () => {
  return (
    <div>
      <Header />
      <h3> 상영관 </h3>
      <div className="theater">
        <div className="TempPurbg">
          <div className="TempPur_explanation">
            <h2>템퍼시네마</h2>
            <br />
            NASA(미 항공 우주국)의 신소재로 유명한 프리미엄 매트리스&베개 브랜드
            '템퍼'와의 콜라보레이션으로 탄생한 세계 최초 리클라이닝 침대 영화관
            입니다.
          </div>

          <div className="TempPur">
            <span>TempPur</span>
            <img src="./img/TempPur.png"></img>
          </div>
        </div>

        <div className="soundXbg">
          <div className="soundX_explanation">
            <h2>사운드X시네마</h2>
            <br />
            현존하는 최고의 사운드 시스템인 3D입체 사운드 시스템을 기반으로
            탁월한 현장감과 공간감을 느낄 수 있습니다.
          </div>

          <div className="soundX">
            <span>soundX</span>
            <img src="./img/sound.png"></img>
          </div>
        </div>

        <div className="sphereXbg">
          <div className="sphereX_explanation">
            <h2>시피어X시네마</h2>
            <br />
            SPHEREX는 진화된 기술로 컨텐츠 관람에 최적화된 환경을 제공하는
            특별관입니다. 스크린, 사운드, 좌석이 만들어내는 최대 시너지로 ‘나를
            감싸는 극강의 몰입감’을 즐길 수 있습니다.
          </div>

          <div className="sphereX">
            <span>sphereX</span>
            <img src="./img/sphereX.png"></img>
          </div>
        </div>

        <div className="IMAXbg">
          <div className="IMAX_explanation">
            <h2>IMAX시네마</h2>
            <br />
            IMAX는 궁극의 몰입감으로 불리는 영화관으로 대형 스크린에 맞는 맞춤형
            설계로 모든 좌석에서 최고의 몰입감을 느낄 수 있고 핀 포인트 정확도로
            최적의 사운드를 제공받을 수 있습니다.
          </div>

          <div className="IMAX">
            <span>IMAX</span>
            <img src="./img/IMAX.png"></img>
          </div>
        </div>

        <div className="fourDXbg">
          <div className="fourDX_explanation">
            <h2>4DX시네마</h2>
            <br />
            4DX 상영관은 영화의 장면에 맞추어 움직이는 모션시트와 더불어 바람,
            빛, 안개, 향기, 진동 등의 다양한 환경 효과를 느낄 수 있는 오감 체험
            특별 상영관입니다.
          </div>

          <div className="fourDX">
            <span>4DX</span>
            <img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA2MjZfMTk1/MDAxNTYxNTM5NTI0MDE5.nQ423_ZupXXNhoXVo_WPBh4uzRbtce2XZZwYmEgRHO8g.66Si8HlnEIGGUEfuYlXQoMFbYXnkMtpsNg0Qa4nJdD8g.GIF.cine_play/HkLTaA1.gif?type=w800"></img>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Theater_Theater;

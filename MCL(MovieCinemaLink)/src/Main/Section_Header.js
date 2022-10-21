// Section_Header.js
import React from "react";
import ReactPlayer from "react-player";
import "./Section_Header.css";

const Section_Header = () => {
  return (
    <div>
      <div>
        <video muted autoPlay loop className="background">
          <source src="/mp4/universus.mp4" />
        </video>
      </div>
      <div>
        <ReactPlayer
          url={"https://youtu.be/fzUKUfHeIYA"}
          width="1000px"
          height="600px"
          playing={true} // 자동 재생 on
          muted={true} // 자동 재생 on
          light={false} // 플레이어 모드
          pip={true} // pip 모드 설정 여부
          loop={true}
        />
      </div>
    </div>
  );
};
export default Section_Header;

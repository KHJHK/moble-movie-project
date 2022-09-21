// Section_Header.js
import React from "react";
import ReactPlayer from "react-player";
import "./Section_Header.css";

const Section_Header = () => {
  return (
    <div className="video">
      <div className="background">
        <video muted autoPlay loop className="background">
          <source src="/mp4/universus.mp4" />
        </video>
        {/* <ReactPlayer className="react-player"
        url={'https://youtu.be/2XX5zDThC3U'}
        
        height='400px'
        playing={true}        // 자동 재생 on
        muted={true}          // 자동 재생 on
        light={false}         // 플레이어 모드
        loop={true}
        /> */}
      </div>
      <div align="center" className="trailer">
        <ReactPlayer
          className="react-player"
          url={"https://youtu.be/fzUKUfHeIYA"}
          height="400px"
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

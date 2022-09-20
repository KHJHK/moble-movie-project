import React from "react";
import "./Section_Header.css";

const Section_Header = () => {
  return (
    <div className="video">
      <div>
        <video className="background" src="universus.mp4" autoplay muted loop />
      </div>

      <div align="center">
        <video
          className="trailer"
          src="http://h.vod.cgv.co.kr/vodCGVa/86217/86217_206209_1200_128_960_540.mp4"
          controls
          muted
          autoplay
          loop
        />
      </div>
    </div>
  );
};
export default Section_Header;

import React from "react";
import "./Section_Header.css";

const Section_Header = () => {
  return (
    <div>
      <div>
        <video
          id="background"
          src="./mp4/background.mp4"
          autoplay
          muted
          loop
        ></video>
      </div>

      <div align="center">
        <video
          id="trailer"
          src="./mp4/0jo.mp4"
          controls
          muted
          autoplay
          loop
        ></video>
      </div>
    </div>
  );
};

export default Section_Header;

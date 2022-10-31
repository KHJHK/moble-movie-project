// Section_Header.js
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
// import css
import "./Section_Header.css";

const Section_Header = () => {
  const [movie, setMovie] = useState("");
  const [vdo, setVdo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost/movie/showAll`)
      .then((res) => {
        setMovie(res.data);

        const random = Math.floor(Math.random() * res.data.length);
        setVdo(res.data[random].movie_video_url);

        console.log(vdo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Section_Header">
      <video muted autoPlay loop className="background">
        <source src="./mp4/universus.mp4" />
      </video>
      <ReactPlayer
        url={vdo}
        width="1000px"
        height="600px"
        playing={true} // 자동 재생 on
        muted={true} // 자동 재생 on
        light={false} // 플레이어 모드
        pip={true} // pip 모드 설정 여부
        loop={true}
      />
    </div>
  );
};
export default Section_Header;

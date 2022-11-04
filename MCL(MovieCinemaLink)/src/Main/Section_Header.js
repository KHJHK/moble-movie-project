// Section_Header.js
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
// import css
import "./Section_Header.css";

const Section_Header = () => {
  const [playList, setPlayList] = useState();
  // const [list, setList] = useState([]);
  // const [playList, setPlayList] = useState([]);

  const getList = async () => {
    const result = await axios.get(`http://localhost/movie/showAll`);
    return result;
  };

  // console.log("-----------", getList());
  getList().then((res) => {
    var urlList = []
    for (var i = 0; i < res.data.length; i++) {
      urlList.push(res.data[i].movie_video_url);
    }

    if (JSON.stringify(urlList) !== JSON.stringify(playList)) {
      setPlayList(urlList);
    }

  })



  return (
    <div className="Section_Header">
      <video muted autoPlay loop className="background">
        <source src="./mp4/universus.mp4" />
      </video>
      <ReactPlayer
        url={playList}
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

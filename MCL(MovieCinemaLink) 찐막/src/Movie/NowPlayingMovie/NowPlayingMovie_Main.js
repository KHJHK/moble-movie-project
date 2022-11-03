// NowPlayingMovie_Main.js

import React, { useState } from "react";
// import { NowPlayingMovieJson } from "./NowPlayingMovieJson";
import NowPlayingMovie_Main_Movie from "./NowPlayingMovie_Main_Movie";
import "./NowPlayingMovie_Main.css";

const NowPlayingMovie_Main = () => {
  const [id, setId] = useState("");
  // console.log("NowPlayingMovieJson Length : " + NowPlayingMovieJson.length);
  // console.log("NowPlayingMovieJson : " + JSON.stringify(NowPlayingMovieJson));
  return (
    <div className="NowPlayingMovie_Main">
      <h3>현재 상영중인 영화</h3>
      <NowPlayingMovie_Main_Movie />
    </div>
  );
};

export default NowPlayingMovie_Main;

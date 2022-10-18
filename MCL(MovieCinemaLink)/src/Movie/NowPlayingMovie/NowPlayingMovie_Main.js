import React, { useState } from "react";
// import { NowPlayingMovieJson } from "./NowPlayingMovieJson";
import NowPlayingMovie_Main_Movie from "./NowPlayingMovie_Main_Movie";

const NowPlayingMovie_Main = () => {
  const [id, setId] = useState("");
  // console.log("NowPlayingMovieJson Length : " + NowPlayingMovieJson.length);
  // console.log("NowPlayingMovieJson : " + JSON.stringify(NowPlayingMovieJson));
  return (
    <div>
      <h3>현재 상영중인 영화</h3>
      <div className="NowPlayingMovie_Main">
        <NowPlayingMovie_Main_Movie />
      </div>
    </div>
  );
};

export default NowPlayingMovie_Main;

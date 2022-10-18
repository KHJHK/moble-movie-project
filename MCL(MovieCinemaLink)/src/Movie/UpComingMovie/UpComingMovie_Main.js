import React, { useState } from "react";
// import { UpComingMovieJson } from "./UpComingMovieJson";
import UpComingMovie_Main_Movie from "./UpComingMovie_Main_Movie";

const UpComingMovie_Main = () => {
  const [id, setId] = useState("");
  // console.log("UpcomingMovieJson Length : " + UpcomingMovieJson.length);
  // console.log("UpcomingMovieJson : " + JSON.stringify(UpcomingMovieJson));
  return (
    <div>
      <h3>상영 예정 영화</h3>
      <div className="UpComingMovie_Main">
        <UpComingMovie_Main_Movie />
      </div>
    </div>
  );
};

export default UpComingMovie_Main;

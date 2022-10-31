// Movie_MovieInformation_Main.js

import React, { useState } from "react";
import "./Movie_MovieInformation_Main.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

function Movie_MovieInformation_UpComing_Main(props) {
  const { id } = useParams();
  const [movieC, setMovieC] = useState("");

  axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR`
    )
    .then((res) => {
      setMovieC(res.data.results);
    });

  const info = (key) => {
    if (id == movieC[key].id) {
      return (
        <div className="Movie_MovieInformation_Main">
          <h3>&nbsp;&nbsp; 영화 상세정보</h3>
          <table>
            <tr>
              <th rowSpan={5}>
                <img src={IMG_BASE_URL + movieC[key].poster_path} />
              </th>
            </tr>
            <tr>
              <td>
                <h2>{movieC[key].title}</h2>
              </td>
            </tr>
            <tr>
              <td>
                <h4>개봉일 : {movieC[key].release_date}</h4>
              </td>
            </tr>
            <tr>
              <td>
                <h4>평점 : {movieC[key].vote_average}/10</h4>
              </td>
            </tr>
            <tr>
              <td>
                <h4>상세정보 : {movieC[key].overview}</h4>
              </td>
            </tr>
            <tr>
              <td colSpan={2} height={"30px"}></td>
            </tr>
            <tr>
              {/* api 연결 필요 */}
              <td colSpan={2}>
                <ReactPlayer
                  url={"https://youtu.be/QnwIYIZki20"}
                  height="75vh"
                  width="100%"
                  controls={true}
                />
              </td>
            </tr>
          </table>
        </div>
      );
    }
  };

  return (
    <div className="Movie_MovieInformation_Main">
      {Object.keys(movieC).map((key) => info(key))}
    </div>
  );
}
export default Movie_MovieInformation_UpComing_Main;

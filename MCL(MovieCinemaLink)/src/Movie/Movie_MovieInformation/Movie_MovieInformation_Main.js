// Movie_MovieInformation_Main.js

import React, { useState } from "react";
import "./Movie_MovieInformation_Main.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

function Movie_MovieInformation_Main(props) {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR`
    )
    .then((res) => {
      setMovie(res.data.results);
    });

  const info = (key) => {
    if (id == movie[key].id) {
      return (
        <div className="Movie_MovieInformation_Main">
          <h2>&nbsp;&nbsp; 영화 상세정보</h2>
          <table>
            <tr>
              <th rowSpan={5}>
                <img src={IMG_BASE_URL + movie[key].poster_path} />
              </th>
            </tr>
            <tr>
              <td>
                <h2>영화명 : {movie[key].title}</h2>
              </td>
            </tr>
            <tr>
              <td>
                <h4>개봉일 : {movie[key].release_date}</h4>
              </td>
            </tr>
            <tr>
              <td>
                <h4>평점 : {movie[key].vote_average}/10</h4>
              </td>
            </tr>
            <tr>
              <td>
                <h5>상세정보 : {movie[key].overview}</h5>
              </td>
            </tr>
            <tr>
              <td colSpan={2} height={"30px"}></td>
            </tr>
            <tr>
              <td colSpan={2}>
                <ReactPlayer
                  url={"https://youtu.be/xT76LsDubZ0"}
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
      {Object.keys(movie).map((key) => info(key))}
    </div>
  );
}
export default Movie_MovieInformation_Main;

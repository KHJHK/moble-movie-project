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

  axios.get(`http://localhost/movie/showAll`).then((res) => {
    setMovie(res.data);
  });

  const info = (key) => {
    if (id == movie[key].movie_id) {
      return (
        <div className="Movie_MovieInformation_Main">
          <h3>&nbsp;&nbsp; 영화 상세정보</h3>
          <table>
            <tr>
              <th rowSpan={5}>
                <img src={IMG_BASE_URL + movie[key].movie_poster_path} />
              </th>
            </tr>
            <tr>
              {/* 영화명 */}
              <td>
                <h2>{movie[key].movie_name}</h2>
              </td>
            </tr>
            <tr>
              <td>
                <h4>개봉일 : {movie[key].movie_open_date}</h4>
              </td>
            </tr>
            <tr>
              <td>
                <h4>평점 : {movie[key].movie_popularity}/10</h4>
              </td>
            </tr>
            <tr>
              <td>
                <h4>상세정보</h4>
                {/* <br /> */}
                <h4>{movie[key].movie_overview}</h4>
              </td>
            </tr>
            <tr>
              <td colSpan={2} height={"30px"}></td>
            </tr>
            <tr>
              <td colSpan={2}>
                <ReactPlayer
                  url={movie[key].movie_video_url}
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

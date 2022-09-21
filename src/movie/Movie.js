import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

// 영화명, 포스터 경로, 평점
export default function Movie({ title, poster_path, vote_average }) {
  return (
    <div className="movie-container">
      <Link to="/Movie_MovieInformation">
        <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
      </Link>
      {/* 영화명과 평점 출력 */}
      <div className="movie-info">
        <p>{title}</p> <span>평점 : {vote_average}</span>
        <br />
        <br />
        <Link to="/Ticketing">
          <button>예매하기</button>
        </Link>
      </div>
    </div>
  );
}

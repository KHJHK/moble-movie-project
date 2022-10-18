// NowPlayingMovie_Main_Movie.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NowPlayingMovie_Main_Movie.css";
import axios from "axios";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

// 영화명, 포스터 경로, 평점
export default function NowPlayingMovie_Main_Movie() {
  //Open API 불러오기
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR`
      )
      .then((res) => {
        //console.log("res.data.results : " + JSON.stringify(res.data.results));
        console.log(
          "res.data.results : " + JSON.stringify(res.data.results[0])
        );
        setMovie(res.data.results);
      });
  }, []);

  return (
    <div>
      {movie.map((m, inx) => (
        <div className="NowPlayingMovie_Main_Movie">
          <div key={m.id + "-" + inx}>
            <Link
              to={`/Movie_MovieInformation/${m.id}`}
              // id={movie.id}
              // onClick={() => movie.setId(m.id)}
            >
              <img
                src={IMG_BASE_URL + m.poster_path}
                alt={`영화포스터${m.id}`}
              />
            </Link>
            {/* 영화명과 평점 출력 */}
            <div>
              <div className="posterContent_title">
                <h4>{m.title}</h4>
              </div>
              <br />
              <div>
                <span>평점 : {m.vote_average}</span>
              </div>
              <br />
              <Link to="./Ticketing">
                <button>예매하기</button>
              </Link>
            </div>
            <br />
          </div>
        </div>
      ))}
    </div>
  );
}

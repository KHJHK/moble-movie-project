// NowPlayingMovie_Main_Movie.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./NowPlayingMovie_Main_Movie.css";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

export function Ticketlogin() {
  if (localStorage.getItem("token") !== null) {
    window.location.replace("/Ticketing");
  } else {
    alert("로그인 먼저 해주세요");
  }
}

// 영화명, 포스터 경로, 평점
export default function NowPlayingMovie_Main_Movie() {
  //Open API 불러오기
  const [movie, setMovie] = useState([]);

  const [mId, SetMId] = useState();
  const [mTitle, SetMTitle] = useState("");

  useEffect(() => {
    axios
      .get(
        // `https://api.themoviedb.org/3/movie/now_playing?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR`
        `http://localhost/movie/showAll`
      )
      .then((res) => {
        // console.log("res.data.results : " + JSON.stringify(res.data.results));
        // console.log(
        //   "res.data.results : " + JSON.stringify(res.data.results[0])
        // );
        setMovie(res.data);
      });
  }, []);

  /*로그인경우 예매하기로 넘어가는 함수*/

  return (
    <div>
      {movie.map((m) => (
        <div className="NowPlayingMovie_Main_Movie">
          <div key={m.movie_id}>
            <Link
              to={`/Movie_MovieInformation/${m.movie_id}`}
              // id={movie.id}
              // onClick={() => movie.setId(m.id)}
            >
              <img
                src={IMG_BASE_URL + m.movie_poster_path}
                // alt={`영화포스터${m.id}`}
              />
            </Link>
            {/* 영화명과 평점 출력 */}
            <div>
              <div className="posterContent_title">
                <h4>{m.movie_name}</h4>
              </div>
              <br />
              <div>
                <span>평점 : {m.movie_popularity}</span>
              </div>
              <br />

              <button onClick={Ticketlogin}>예매하기</button>
            </div>
            <br />
          </div>
        </div>
      ))}
    </div>
  );
}

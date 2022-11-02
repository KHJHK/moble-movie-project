// AdminMovie.js
import React, { useState, useEffect } from "react";
import AdminHeader from "../AdminHeader";
import AdminNav from "../AdminNav";
import "./AdminMovie.css";
import Manage_Movie_List from "./Manage_Movie_List";
import axios from "axios";

const AdminMovie = () => {
  // 영화 리스트
  const [MovieList, setMovieList] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:80/movie/showAll`).then((res) => {
      setMovieList(res.data);
    });
  }, []);

  return (
    <div className="ADMIN">
      <AdminHeader />
      <AdminNav />

      <div className="AdminMovie">
        <h3>영화 관리</h3>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>영화명</th>
              <th>개봉일</th>
              <th>평점</th>
              <th>이미지 URL</th>
              <th>줄거리</th>
              <th>예고편 URL</th>
            </tr>
          </thead>

          <tbody>
            {MovieList.map((item) => {
              return (
                <Manage_Movie_List
                  movie_num={item.movie_num}
                  movie_name={item.movie_name}
                  movie_open_date={item.movie_open_date}
                  movie_popularity={item.movie_popularity}
                  movie_poster_path={item.movie_poster_path}
                  movie_overview={item.movie_overview}
                  movie_video_url={item.movie_video_url}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMovie;

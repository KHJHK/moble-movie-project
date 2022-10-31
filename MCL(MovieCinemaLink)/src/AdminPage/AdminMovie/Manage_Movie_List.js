// Manage_Movie_List.js
import React from "react";

export default function Manage_Movie_List(props) {
  return (
    // <div class="container">
    //   <table class="board_table">
    //     <tbody>
    <tr>
      {/* 번호 */}
      <td>
        <span>{props.movie_num}</span>
      </td>
      {/* 영화명 */}
      <td>
        <span>{props.movie_name}</span>
      </td>
      {/* 개봉일 */}
      <td>
        <span>{props.movie_open_date}</span>
      </td>
      {/* 평점 */}
      <td>
        <span>{props.movie_popularity}</span>
      </td>
      {/* 이미지 URL */}
      <td>
        <span>{props.movie_poster_path}</span>
      </td>
      {/* 줄거리 */}
      <td>
        <span>{props.movie_overview}</span>
      </td>
      {/* 예고편 URL */}
      <td>
        <span>{props.movie_video_url}</span>
      </td>
    </tr>
    //     </tbody>
    //   </table>
    // </div>
  );
}

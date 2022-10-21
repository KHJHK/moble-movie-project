// Ticketing_SelectRegion.js
import React, { useEffect } from "react";
import { RegionClick } from "../Ticketing/Ticketing_Selectdoing";
import {
  movieClicked,
  localStoragereset,
} from "../Ticketing/Ticketing_Selectdoing";
import axios from "axios";
import { useState } from "react";
// import { useEffect } from "react";
const Ticketing_SelectRegion = (props) => {
  const [movie, setMovie] = useState([]);

  var movie_id = localStorage.getItem("movie_id");

  useEffect(() => {
    axios
      .get(
        // `https://api.themoviedb.org/3/movie/now_playing?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR`
        `http://localhost/ticketing/selectLocation?movie_id=${movie_id}`
      )

      .then((res) => {
        //console.log("res.data.results : " + JSON.stringify(res.data.results));
        // console.log("res.data.results : " + JSON.stringify(res.data.results[0]));
        setMovie(res.data);
      });
  }, []);

  return (
    <div className="SelectRegion">
      <h3>지역 선택</h3>
      {movie.map((item) => {
        return (
          <div>
            <ul>
              <li
                className="SelectRG"
                onClick={(e) => {
                  RegionClick(e);
                }}
              >
                {item.cinema_location}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Ticketing_SelectRegion;

// Ticketing_SelectRegion.js
import React,{useEffect} from "react";
import {RegionClick} from "../Ticketing/Ticketing_Selectdoing";
import {movieClicked,localStoragereset } from "../Ticketing/Ticketing_Selectdoing";
import axios from "axios";
import { useState } from "react";
import Ticketing_SelectMovie from "./Ticketing_SelectMovie";
// import { useEffect } from "react";
 const Ticketing_SelectRegion = () => {
  
  const [movie, setMovie] = useState([]);
  // const [movie_id, setMovieId] = useState();
  // setMovieId(localStorage.getItem('movie_id'));

  var movie_id = localStorage.getItem('movie_id');
  console.log("mv : ", movie_id);

  useEffect(() => {
    axios
      .get(
        `http://localhost/ticketing/selectLocation?movie_id=${movie_id}`
      )
      .then((res) => {
        console.log("hello");
        setMovie(res.data);
      });
    }, []);

  // changeMovieId(() => {
  //   var movie_id_temp = localStorage.getItem('movie_id');
  //   if(movie_id !== movie_id_temp){
  //     axios
  //     .get(
  //       `http://localhost/ticketing/selectLocation?movie_id=${movie_id}`
  //     )
  //     .then((res) => {
  //       setMovie(res.data);
  //     });
  //   }
  // });

  
  return (
    <div className="SelectRegion">
     <h3>지역 선택</h3>
      {movie.map((item) => {
        
        return (
          
          <div>
            <ul>
              <li className="SelectRG" onClick={(e) => {RegionClick(e)}}>
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
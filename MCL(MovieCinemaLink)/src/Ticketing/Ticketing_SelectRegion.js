// Ticketing_SelectRegion.js
import React,{useEffect, useState} from "react";

import {RegionClick} from "../Ticketing/Ticketing_Selectdoing";
import {movieClicked,localStoragereset } from "../Ticketing/Ticketing_Selectdoing";
import axios from "axios";


const Ticketing_SelectRegion = (props) => {

  console.log("일단 지역창 넘어옴");
  
  const movie_id = localStorage.getItem('movie_id');
  const [movie, setMovie] = useState([]);
  // movie_id = localStorage.getItem('movie_id');
  const movie_check = localStorage.getItem('moviecheck');
  const [moviea, setMoviea] = useState(props.movie_id);
 
  // const storeMovieId = (id) =>{
  //   localStorage.setItem('movie_id',id);
  //   console.log("fefefef")
  // }

  useEffect(() => {
    setMoviea(props.movie_id);
    console.log("moviea : " + moviea);

    axios.get(`http://localhost/ticketing/selectLocation?movie_id=${moviea}`)
    .then((response) => {
      setMovie(response.data);
  })
  console.log("useEffect에 들어온 상황(movie) : " + movie);
}, [props.movie_id]);
  
  return (
    <div className="SelectRegion">
       <h3>지역 선택</h3>
       
      {movie.map((item) => {
        
        return (
          
          <div>
            <ul>
              <li className="SelectRG" onClick={(e) => {RegionClick}}>
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

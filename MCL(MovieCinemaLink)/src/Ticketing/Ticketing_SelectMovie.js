// Ticketing_SelectMovie.js

import React, { useState } from "react";

import { movieClick } from "../Ticketing/Ticketing_Selectdoing";
import "./Ticketing_SelectMovie.css";
import axios from "axios";
import { useEffect } from "react";
// import {movieClicked} from "../Ticketing/Ticketing_Selectdoing";

const Ticketing_SelectMovie = () => {


  
  const [movie, setMovie] = useState([]);
  

  axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR`
    )

    

    .then((res) => {
      //console.log("res.data.results : " + JSON.stringify(res.data.results));
      // console.log("res.data.results : " + JSON.stringify(res.data.results[0]));
      setMovie(res.data.results);
    });

  return (
    <div className="SelectMovie" >
     
      <h3>영화 선택</h3>
      {movie.map((item) => {
        
        return (
          
          <div>
            <ul>
              <li className="SelectMV" onClick={movieClick}>
              {item.title}
              </li>
            </ul> 

              <ul>
              <li className="SelectIMG">
                {item.backdrop_path}

                {/* <a href="#">{item.title}</a> */}
              </li>
            </ul>
          </div>
          
        );
       
      })}
      </div>
    
  );
  
};

export default Ticketing_SelectMovie;

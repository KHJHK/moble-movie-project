// Ticketing_SelectMovie.js

import React, { useState } from "react";
import "../Ticketing/Ticketing_SelectRegion";

import { movieClick } from "../Ticketing/Ticketing_Selectdoing";
import "./Ticketing_SelectMovie.css";
import axios from "axios";
import { useEffect } from "react";
import Ticketing_SelectRegion from "../Ticketing/Ticketing_SelectRegion";
// import {movieClicked} from "../Ticketing/Ticketing_Selectdoing";

const Ticketing_SelectMovie = () => {

  const storeId = (id) =>{
    localStorage.setItem('movie_id',id);
  };

  axios
    .get(
      `http://localhost/ticketing/selectMovie`
    ) 
    .then((res) => {
      setMovie(res.data);
    });

  return (
    <div className="SelectMovie" >
     
      <h3>영화 선택</h3>
      {movie.map((item) => {
        
        return (
          
          <div>
            <ul>
              <li className="SelectMV" onClick={(e)=>{movieClick(e), storeId(item.movie_id)}}>
              {item.movie_name}
              </li>
            </ul> 

              <ul>
              <li className="SelectIMG">
                {item.movie_pos}

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

// Ticketing_SelectMovie.js

import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { movieClick } from "../Ticketing/Ticketing_Selectdoing";
import Ticketing_SelectRegion from "./Ticketing_SelectRegion";


import "./Ticketing_SelectMovie.css";
import axios from "axios";
import { useEffect } from "react";
// import {movieClicked} from "../Ticketing/Ticketing_Selectdoing";

const Ticketing_SelectMovie = () => {
  const [movie, setMovie] = useState([]);
  const [movie_id, setMovieId] = useState(404); 
  localStorage.setItem('movie_id',0);



  const storeMovieId = (id) =>{
    localStorage.setItem('movie_id',id);
    console.log("moveid ", movie_id, id);
    test(id);
  }

function test(id) {

  setMovieId((id)=id);


}

  useEffect(() => {
    console.log(movie_id);
    axios.get(`http://localhost/ticketing/selectMovie`)
    .then((response) => {
      setMovie(response.data);
  })
}, [movie_id]);

  return (
    <div className="SelectMovie" >
     
      <h3>영화 선택</h3>
      {movie.map((item) => {
        
        return (
          
          <div >
            <ul>
              <li className="SelectMV" onClick={(e) => { storeMovieId(item.movie_id), movieClick(e) }} >
              {item.movie_name}
              </li>
            </ul> 
          </div>
          
        );
       
      })}
       <Ticketing_SelectRegion movie_id={movie_id}/>
      </div>
    
  );
  
};

export default Ticketing_SelectMovie;
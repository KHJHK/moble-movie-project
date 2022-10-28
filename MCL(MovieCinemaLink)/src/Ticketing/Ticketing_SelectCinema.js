// Ticketing_SelectCinema.js

import React from "react";
import { CinemaClick } from "../Ticketing/Ticketing_Selectdoing";

const Ticketing_SelectCinema = () => {
  return (
    <div className="SelectCinema">
      <h3>극장 선택</h3>
      <ul >
        <li className="SelectCN" onClick={CinemaClick} id= "Cheonan">천안 터미널점</li>
        <li className="SelectCN" onClick={CinemaClick} id= "Cheonan2">천안 시청점점 </li>
        <li className="SelectCN" onClick={CinemaClick}  id= "Osan">오산 운암점</li>
        <li className="SelectCN" onClick={CinemaClick}  id= "Osan2">오산 시청점</li>
        <li className="SelectCN" onClick={CinemaClick}  id= "Pyeongtaek">평택 소사별점</li>
        <li className="SelectCN" onClick={CinemaClick}  id= "Pyeongtaek2">평택 평택역점</li>
      </ul>
    </div>
  );
};

export default Ticketing_SelectCinema;

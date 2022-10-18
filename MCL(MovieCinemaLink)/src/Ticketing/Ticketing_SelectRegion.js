// Ticketing_SelectRegion.js
import React,{useEffect} from "react";
import {RegionClick} from "../Ticketing/Ticketing_Selectdoing";
import {movieClicked,localStoragereset } from "../Ticketing/Ticketing_Selectdoing";
const Ticketing_SelectRegion = () => {

  
  
  return (
    <div className="SelectRegion">
      <h3>지역 선택</h3>
      <ul >
        <li className="SelectRG" onClick={RegionClick}id="area1">천안</li>
        <li className="SelectRG" onClick={RegionClick}id="area2">오산</li>
        <li className="SelectRG" onClick={RegionClick}id="area3">평택</li>
      </ul>
      
    </div>
  );
};

export default Ticketing_SelectRegion;

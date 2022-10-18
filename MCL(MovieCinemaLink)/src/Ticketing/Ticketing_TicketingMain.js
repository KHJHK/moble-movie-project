// Ticketing_TicketingMain.js

import React from "react";

import "./Ticketing_TicketingMain.css";
import Ticketing_SelectMovie from "./Ticketing_SelectMovie";
import Ticketing_SelectRegion from "./Ticketing_SelectRegion";
import Ticketing_SelectCinema from "./Ticketing_SelectCinema";
import Ticketing_SelectDate from "./Ticketing_SelectDate";
import Ticketing_SelectTime from "./Ticketing_SelectTime";


// import SelectSeat.css
import "./Ticketing_SelectSeat.css";
import Ticketing_SelectSeat from "./Ticketing_SelectSeat";
import {movieClicked,localStoragereset} from "../Ticketing/Ticketing_Selectdoing";
import "../Ticketing/Ticketing_Selectdoing"
import { useEffect } from "react";

// Select 동작 구현


const Ticketing_TicketingMain = () => {
  
  var movievalue = localStorage.getItem('key');
  console.log("Test MOVIE : "+movievalue);

  

  // movieClicked ();
  return (
    <div className="Ticketing_TicketingMain">
      <h3>예매하기</h3>

      {/* 영화 선택 */}
      <div className="Ticketing_SelectMovie">
        <Ticketing_SelectMovie />
      </div>

      <div className="Ticketing_Select_InlineBlock">
        {/* 지역 선택 */}
        <div className="Ticketing_SelectRegion">
          <div>
            <Ticketing_SelectRegion />
          </div>
        </div>

        {/* 극장 선택 */}
        <div className="Ticketing_SelectCinema">
          <Ticketing_SelectCinema />
        </div>

        {/* 날짜 선택 */}
        <div className="Ticketing_SelectDate">
          <Ticketing_SelectDate />
        </div>

        {/* 시간 선택 */}
        <div className="Ticketing_SelectTime">
          <Ticketing_SelectTime />
        </div>
      </div>

      {/* 좌석 선택 */}
      <div className="Ticketing_SelectSeat">
        <Ticketing_SelectSeat />
      </div>
      
      
      
    </div>
  );
  
  
};

export default Ticketing_TicketingMain;

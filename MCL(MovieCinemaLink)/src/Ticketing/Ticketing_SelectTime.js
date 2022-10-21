// Ticketing_SelectTime.js
import React from "react";
import { TimeClick } from "../Ticketing/Ticketing_Selectdoing";

const Ticketing_SelectTime = () => {
  return (
    <div className="SelectTime">
      <h3>시간 선택</h3>
      <ul>
        <li className="SelectTI" onClick={TimeClick}>
          AM 6:00
        </li>
        <li className="SelectTI" onClick={TimeClick}>
          PM 12:0
        </li>
        <li className="SelectTI" onClick={TimeClick}>
          PM 6:00
        </li>
        <li className="SelectTI" onClick={TimeClick}>
          AM 12:0
        </li>
      </ul>
    </div>
  );
};

export default Ticketing_SelectTime;

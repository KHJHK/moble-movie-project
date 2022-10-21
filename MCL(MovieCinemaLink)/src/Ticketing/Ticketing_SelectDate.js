// Ticketing_SelectDate.js

import React from "react";
import { DateClick } from "../Ticketing/Ticketing_Selectdoing";

const Ticketing_SelectDate = () => {
  return (
    <div className="SelectDate">
      <h3>날짜 선택</h3>
      <ul>
        <li className="SelectDT" onClick={DateClick}>
          2022-01-02
        </li>
        <li className="SelectDT" onClick={DateClick}>
          2022-02-20
        </li>
        <li className="SelectDT" onClick={DateClick}>
          2022-01-02
        </li>
        <li className="SelectDT" onClick={DateClick}>
          2022-04-10
        </li>
        <li className="SelectDT" onClick={DateClick}>
          2022-01-02
        </li>
        <li className="SelectDT" onClick={DateClick}>
          2022-04-10
        </li>
        <li className="SelectDT" onClick={DateClick}>
          2022-01-02
        </li>
        <li className="SelectDT" onClick={DateClick}>
          2022-04-10
        </li>
      </ul>
    </div>
  );
};

export default Ticketing_SelectDate;

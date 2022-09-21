import React from "react";
import "./TicketingMain.css";

import SelectDate from "./SelectDate";
import SelectSeat from "./SelectSeat";

const TicketingMain = () => {
  return (
    <div className="TicketinMain">
      {/* <div className="SelectMovie">
        <h3>영화 선택</h3>
        <p>1</p>
        <br />
        <p>2</p>
        <br />
        <p>3</p>
      </div>

      <div className="SelectCinema">
        <h3>극장 선택</h3>
        <p>1</p>
        <br />
        <p>2</p>
        <br />
        <p>3</p>
        <br />
      </div>

      <div className="SelectTheater">
        <h3>상영관 선택</h3>
        <p>1</p>
        <br />
        <p>2</p>
        <br />
        <p>3</p>
      </div>

      <div className="SelectDate">
        <h3>날짜 선택</h3>
        <p>1</p>
        <br />
        <p>2</p>
        <br />
        <p>3</p>
      </div>

      <div className="SelectTime">
        <h3>시간 선택</h3>
        <p>1</p>
        <br />
        <p>2</p>
        <br />
        <p>3</p>
      </div> */}
      <SelectDate />
      <SelectSeat />
    </div>
  );
};

export default TicketingMain;

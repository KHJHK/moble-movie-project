import React from "react";
import "./Ticketing_TicketingMain.css";

import Ticketing_SelectMovie from "./Ticketing_SelectMovie";
import Ticketing_Cinema from "./Ticketing_Cinema";
import Ticketing_Theater from "./Ticketing_Theater";
import Ticketing_SelectDateTime from "./Ticketing_SelectDateTime";
import Ticketing_SelectSeat from "./Ticketing_SelectSeat";

const Ticketing_TicketingMain = () => {
  return (
    <div>
      <div className="Ticketing_SelectMovie">
        <Ticketing_SelectMovie />
      </div>

      <div className="Ticketing_Cinema">
        <Ticketing_Cinema />
      </div>

      <div className="Ticketing_Theater">
        <Ticketing_Theater />
      </div>

      {/* <div className="Ticketing_SelectDateTime">
        <Ticketing_SelectDateTime />
      </div> */}
      {/* <div className="Ticketing_SelectSeat">
        <Ticketing_SelectSeat />
      </div> */}
    </div>
  );
};

export default Ticketing_TicketingMain;

import React from "react";

import Header from "../Main/Header";
import Ticketing_TicketingMain from "./Ticketing_TicketingMain";
import Footer from "../Main/Footer";
import "./Ticketing.css";

const Ticketing = () => {
  return (
    <div>
      <Header />
      <div className="Section">
      <Ticketing_TicketingMain />
      </div>
      <Footer />
    </div>
  );
};

export default Ticketing;

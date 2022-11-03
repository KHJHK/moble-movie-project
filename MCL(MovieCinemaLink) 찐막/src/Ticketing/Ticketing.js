// Ticketing.js
import React from "react";
import Header from "../Main/Header";
import Ticketing_TicketingMain from "./Ticketing_TicketingMain";
import Footer from "../Main/Footer";
import errorPage from "../Main/errorPage";

const Ticketing = () => {
  const key1 = window.localStorage.key("token");

  if (key1 == "token") {
    return (
      <div>
        <Header />
        <Ticketing_TicketingMain />
        <Footer />
      </div>
    );
  } else {
    return errorPage();
  }

};

export default Ticketing;

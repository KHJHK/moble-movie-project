// Main.js
import React from "react";
// import css
import "./Main.css";
//component call
import Header from "./Header";
import Section_Header from "./Section_Header";
import Section_article01 from "./Section_article01";
import Section_article02 from "./Section_article02";
import Footer from "./Footer.js";

const Main = () => {
  return (
    <div>
      <Header />
      <Section_Header />
      <Section_article01 />
      <Section_article02 />
      <Footer />
    </div>
  );
};

export default Main;

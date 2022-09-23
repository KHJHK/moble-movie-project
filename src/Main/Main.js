// Main.js
import React from "react";
import "./Main.css";

import Header from "./Header";
import Section_Header from "./Section_Header";
import Section_article01 from "./Section_article01";
import Section_article02 from "./Section_article02";
import Footer from "./Footer.js";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="Section">
        <Section_Header />
        <Section_article01 />
        <Section_article02 />
      </div>

      <Footer />
    </div>
  );
};

export default Main;

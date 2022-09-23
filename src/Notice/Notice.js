// Notice.js

import React from "react";
import "./Notice.css";

import Header from "../Main/Header";
import Notice_NoticeMain from "./Notice_NoticeMain";
import Footer from "../Main/Footer";

const Notice = () => {
  return (
    <div>
      <Header />
      <div className="Section">
        <Notice_NoticeMain />
      </div>
      <Footer />
    </div>
  );
};

export default Notice;

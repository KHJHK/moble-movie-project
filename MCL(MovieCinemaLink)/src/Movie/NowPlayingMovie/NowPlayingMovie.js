// NowPlayingMovie.js

import React from "react";
import Footer from "../../Main/Footer";
import Header from "../../Main/Header";
import NowPlayingMovie_Main from "./NowPlayingMovie_Main";

const NowPlayingMovie = () => {
  return (
    <div>
      <Header />
      <NowPlayingMovie_Main />
      <Footer />
    </div>
  );
};

export default NowPlayingMovie;

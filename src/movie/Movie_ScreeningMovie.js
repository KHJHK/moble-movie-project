import React from 'react';
import Footer from '../Main/Footer';
import Header from "../Main/Header";
import Movie_ScreeningMovie_ListOfScreenedMovies from './Movie_ScreeningMovie_ListOfScreenedMovies';

const Movie_ScreeningMovie = () => {
  return (
    <div>
      <Header/>
      <Movie_ScreeningMovie_ListOfScreenedMovies/>
      <Footer/>
    </div>
  );
};

export default Movie_ScreeningMovie;
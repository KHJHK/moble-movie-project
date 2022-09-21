import React from 'react';
import Footer from '../Main/Footer';
import Header from '../Main/Header';
import Movie_ToBeScreened_ListOfUpcomingFilms from './Movie_ToBeScreened_ListOfUpcomingFilms';

const Movie_ToBeScreened = () => {
    return (
        <div>
            <Header/>
            <Movie_ToBeScreened_ListOfUpcomingFilms/>
            <Footer/>
        </div>
    );
};

export default Movie_ToBeScreened;
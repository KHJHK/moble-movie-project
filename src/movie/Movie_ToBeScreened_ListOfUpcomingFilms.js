import React from "react";
import { dummy } from "./MovieDummy";
import Movie from "./Movie";
import { Link } from "react-router-dom";

const Movie_ToBeScreened_ListOfUpcomingFilms = () => {
  return (
    <div>
      <h3>상영 예정작</h3>
      <div className="app-container">
        {dummy.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>

    </div>
  );
};

export default Movie_ToBeScreened_ListOfUpcomingFilms;

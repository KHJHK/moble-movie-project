import React from "react";
import { dummy } from "./MovieDummy";
import Movie from "./Movie";

const Movie_ScreeningMovie_ListOfScreenedMovies = () => {
  return (
    <div>
      <h3>현재 상영중인 영화</h3>
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

export default Movie_ScreeningMovie_ListOfScreenedMovies;

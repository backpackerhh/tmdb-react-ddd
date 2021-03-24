import React from "react";

import { Movie } from "./Movie";

export const SearchMovieList = ({ movies }) => {
  return (
    <div className="movies-container">
      {movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

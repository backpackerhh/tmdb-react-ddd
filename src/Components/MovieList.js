import React from "react";

import { Movie } from "./Movie";
import { generateRankWithinPaginatedList } from "../utils/generateRankWithinPaginatedList";
import "../styles/MovieList.css";

export const MovieList = ({ movies, pageNumber }) => {
  return (
    <div className="movies-container">
      {movies.map((movie, idx) => {
        const rank = generateRankWithinPaginatedList(pageNumber, idx + 1);

        return <Movie key={movie.id} movie={movie} rank={rank} />;
      })}
    </div>
  );
};

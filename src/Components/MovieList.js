import React from "react";

import { Movie } from "./Movie";
import { generateRankWithinPaginatedList } from "../utils/generateRankWithinPaginatedList";

export const MovieList = ({ movies, pageNumber }) => {
  return movies.map((movie, idx) => {
    const rank = generateRankWithinPaginatedList(pageNumber, idx + 1);

    return <Movie key={movie.id} movie={movie} rank={rank} />;
  });
};

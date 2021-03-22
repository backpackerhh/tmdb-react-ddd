import React from "react";
import { Link } from "react-router-dom";

export const Movie = ({ movie, rank }) => {
  const { id, title, voteAverage, releaseDate, poster } = movie;
  const { url, alt, title: posterTitle } = poster;

  return (
    <div>
      {rank && <strong>#{rank}</strong>}

      <Link to={`/movies/${id}`}>
        <img src={url} alt={alt} title={posterTitle} />

        <div>
          <h3>{title}</h3>
          <h4>{voteAverage}</h4>
          <h5>{releaseDate}</h5>
        </div>
      </Link>
    </div>
  );
};

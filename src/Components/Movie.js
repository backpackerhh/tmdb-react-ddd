import React from "react";
import { Link } from "react-router-dom";

export const Movie = ({ movie, rank }) => {
  const { id, title, voteAverage, releaseYear, poster } = movie;
  const { listUrl, alt } = poster;

  return (
    <div className="movie-card">
      {rank && <strong className="movie-rank">#{rank}</strong>}

      <Link to={`/movies/${id}`}>
        <img src={listUrl} alt={alt} />
      </Link>

      <div className="movie-info">
        <div className="movie-title">
          <strong>{title}</strong>
        </div>

        <div className="movie-release-year">{releaseYear}</div>

        <div className="movie-vote-average">
          <strong>{voteAverage}</strong>
        </div>
      </div>
    </div>
  );
};

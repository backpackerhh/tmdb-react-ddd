import { config } from "../../config";

const { TMDB_API_POSTER_URL, MOVIE_POSTER_HEIGHT } = config;

export class PosterValueObject {
  static create({ posterPath, movieTitle, movieOverview }) {
    return new PosterValueObject({ posterPath, movieTitle, movieOverview });
  }

  constructor({ posterPath, movieTitle, movieOverview }) {
    this._posterPath = posterPath;
    this._movieTitle = movieTitle;
    this._movieOverview = movieOverview;
  }

  url() {
    return `${TMDB_API_POSTER_URL}${this._posterPath}`;
  }

  height() {
    return MOVIE_POSTER_HEIGHT;
  }

  alt() {
    return `${this._movieTitle} poster`;
  }

  title() {
    return this._movieOverview;
  }

  toJSON() {
    return {
      url: this.url(),
      height: this.height(),
      alt: this.alt(),
      title: this.title(),
    };
  }
}

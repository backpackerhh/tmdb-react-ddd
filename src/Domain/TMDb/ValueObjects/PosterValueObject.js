import { config } from "../../config";

const { TMDB_API_POSTER_URL } = config;

export class PosterValueObject {
  static create({ posterPath, movieTitle }) {
    return new PosterValueObject({ posterPath, movieTitle });
  }

  constructor({ posterPath, movieTitle }) {
    this._posterPath = posterPath;
    this._movieTitle = movieTitle;
  }

  url() {
    if (this._posterPath) {
      return `${TMDB_API_POSTER_URL}${this._posterPath}`;
    } else {
      return "/not-found.png";
    }
  }

  alt() {
    return `${this._movieTitle} poster`;
  }

  toJSON() {
    return {
      url: this.url(),
      alt: this.alt(),
    };
  }
}

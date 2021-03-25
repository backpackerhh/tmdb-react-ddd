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

  listUrl() {
    return this._getPosterPath(200);
  }

  detailUrl() {
    return this._getPosterPath(300);
  }

  alt() {
    return `${this._movieTitle} poster`;
  }

  toJSON() {
    return {
      listUrl: this.listUrl(),
      detailUrl: this.detailUrl(),
      alt: this.alt(),
    };
  }

  _getPosterPath(width) {
    if (this._posterPath) {
      return `${TMDB_API_POSTER_URL}w${width}${this._posterPath}`;
    } else {
      return "/not-found.png";
    }
  }
}

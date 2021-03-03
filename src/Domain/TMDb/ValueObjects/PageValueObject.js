export class PageValueObject {
  static create({ movies, paginationData }) {
    return new PageValueObject({ movies, paginationData });
  }

  constructor({ movies, paginationData }) {
    this._movies = movies;
    this._paginationData = paginationData;
  }

  movies() {
    return this._movies;
  }

  paginationData() {
    return this._paginationData;
  }

  toJSON() {
    return {
      movies: this.movies(),
      paginationData: this.paginationData(),
    };
  }
}

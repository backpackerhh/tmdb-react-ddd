export class MovieIdValueObject {
  static create({ movieId }) {
    return new MovieIdValueObject({ movieId });
  }

  constructor({ movieId }) {
    this._movieId = movieId;
  }

  value() {
    return this._movieId;
  }
}

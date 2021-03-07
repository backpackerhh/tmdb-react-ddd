import { InvalidPageNumberError } from "../Errors/InvalidPageNumberError";
import { config } from "../../config";

const { TMDB_PAGES_LIMIT } = config;

export class PageNumberValueObject {
  static create({ pageNumber }) {
    if (pageNumber >= 1 && pageNumber <= TMDB_PAGES_LIMIT) {
      return new PageNumberValueObject({ pageNumber });
    } else {
      InvalidPageNumberError.create();
    }
  }

  constructor({ pageNumber }) {
    this._pageNumber = pageNumber;
  }

  value() {
    return this._pageNumber;
  }
}

import { InvalidPageNumberError } from "../Errors/InvalidPageNumberError";

export class PageNumberValueObject {
  static create({ pageNumber }) {
    if (pageNumber >= 1) {
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

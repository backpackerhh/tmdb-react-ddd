import { InvalidTermError } from "../Errors/InvalidTermError";

const REGEX = /\w+/i;

export class TermValueObject {
  static create({ term }) {
    if (REGEX.test(term)) {
      return new TermValueObject({ term });
    } else {
      InvalidTermError.create();
    }
  }

  constructor({ term }) {
    this._term = term;
  }

  value() {
    return this._term;
  }
}

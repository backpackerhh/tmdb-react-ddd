export class PaginatorValueObject {
  static create({ totalPages, currentPageNumber }) {
    return new PaginatorValueObject({ totalPages, currentPageNumber });
  }

  constructor({ totalPages, currentPageNumber }) {
    this._totalPages = totalPages;
    this._currentPageNumber = currentPageNumber;
  }

  totalPages() {
    return this._totalPages;
  }

  firstPageNumber() {
    if (this._currentPageNumber === 1) return;

    return 1;
  }

  previousPageNumber() {
    if (this._currentPageNumber === 1) return;

    return this._currentPageNumber - 1;
  }

  currentPageNumber() {
    return this._currentPageNumber;
  }

  nextPageNumber() {
    if (this._currentPageNumber >= this._totalPages) return;

    return this._currentPageNumber + 1;
  }

  lastPageNumber() {
    if (this._currentPageNumber >= this._totalPages) return;

    return this._totalPages;
  }

  toJSON() {
    return {
      totalPages: this.totalPages(),
      firstPageNumber: this.firstPageNumber(),
      previousPageNumber: this.previousPageNumber(),
      currentPageNumber: this.currentPageNumber(),
      nextPageNumber: this.nextPageNumber(),
      lastPageNumber: this.lastPageNumber(),
    };
  }
}

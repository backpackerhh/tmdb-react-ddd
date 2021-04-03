import React from "react";
import { Link } from "react-router-dom";

import { addQueryParamToCurrentPath } from "../utils/addQueryParamToCurrentPath";
import "../styles/Paginator.css";

export const Paginator = ({ paginationData }) => {
  const {
    firstPageNumber,
    previousPageNumber,
    currentPageNumber,
    nextPageNumber,
    lastPageNumber,
    totalPages,
  } = paginationData;

  if (totalPages === 0 || currentPageNumber > totalPages) return null;

  return (
    <div className="paginator">
      <div className="paginator-item first-page">
        <Link
          to={(location) => addQueryParamToCurrentPath(location, "page", firstPageNumber)}
          className={firstPageNumber ? "" : "disabled-link"}
        >
          « First
        </Link>
      </div>

      <div className="paginator-item previous-page">
        <Link
          to={(location) => addQueryParamToCurrentPath(location, "page", previousPageNumber)}
          className={previousPageNumber ? "" : "disabled-link"}
        >
          « Previous
        </Link>
      </div>

      <div className="paginator-item current-page">
        <strong>Page {currentPageNumber}</strong>
      </div>

      <div className="paginator-item next-page">
        <Link
          to={(location) => addQueryParamToCurrentPath(location, "page", nextPageNumber)}
          className={nextPageNumber ? "" : "disabled-link"}
        >
          Next »
        </Link>
      </div>

      <div className="paginator-item last-page">
        <Link
          to={(location) => addQueryParamToCurrentPath(location, "page", lastPageNumber)}
          className={lastPageNumber ? "" : "disabled-link"}
        >
          Last »
        </Link>
      </div>
    </div>
  );
};

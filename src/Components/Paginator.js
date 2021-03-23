import React from "react";
import { Link } from "react-router-dom";

import { addQueryParamToCurrentPath } from "../utils/addQueryParamToCurrentPath";
import "../styles/Paginator.css";

export const Paginator = ({ paginationData }) => {
  const { previousPageNumber, currentPageNumber, nextPageNumber, totalPages } = paginationData;

  if (totalPages === 0 || currentPageNumber > totalPages) return null;

  return (
    <div className="paginator">
      <div className="paginator-item first-page">
        {previousPageNumber && previousPageNumber !== 1 && (
          <Link to={(location) => addQueryParamToCurrentPath(location, "page", 1)}>« First</Link>
        )}
      </div>

      <div className="paginator-item previous-page">
        {previousPageNumber && (
          <Link to={(location) => addQueryParamToCurrentPath(location, "page", previousPageNumber)}>
            « Previous
          </Link>
        )}
      </div>

      <div className="paginator-item current-page">
        <strong>Page {currentPageNumber}</strong>
      </div>

      <div className="paginator-item next-page">
        {nextPageNumber && (
          <Link to={(location) => addQueryParamToCurrentPath(location, "page", nextPageNumber)}>
            Next »
          </Link>
        )}
      </div>

      <div className="paginator-item last-page">
        {nextPageNumber && nextPageNumber !== totalPages && (
          <Link to={(location) => addQueryParamToCurrentPath(location, "page", totalPages)}>
            Last »
          </Link>
        )}
      </div>
    </div>
  );
};

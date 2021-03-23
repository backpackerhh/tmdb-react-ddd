import React from "react";
import { Link } from "react-router-dom";

import { addQueryParamToCurrentPath } from "../utils/addQueryParamToCurrentPath";

export const Paginator = ({ paginationData }) => {
  const { previousPageNumber, currentPageNumber, nextPageNumber, totalPages } = paginationData;

  if (totalPages === 0 || currentPageNumber > totalPages) return null;

  return (
    <p>
      {previousPageNumber && (
        <Link to={(location) => addQueryParamToCurrentPath(location, "page", previousPageNumber)}>
          &#60;&#60; Previous
        </Link>
      )}

      <strong>{currentPageNumber}</strong>

      {nextPageNumber && (
        <Link to={(location) => addQueryParamToCurrentPath(location, "page", nextPageNumber)}>
          Next &#62;&#62;
        </Link>
      )}
    </p>
  );
};

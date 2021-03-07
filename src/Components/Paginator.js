import React from "react";
import { Link } from "react-router-dom";

export const Paginator = ({ paginationData }) => {
  const { previousPageNumber, currentPageNumber, nextPageNumber } = paginationData;

  return (
    <p>
      {previousPageNumber && <Link to={`/?page=${previousPageNumber}`}>&#60;&#60; Previous</Link>}

      <strong>{currentPageNumber}</strong>

      {nextPageNumber && <Link to={`/?page=${nextPageNumber}`}>Next &#62;&#62;</Link>}
    </p>
  );
};

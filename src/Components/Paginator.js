import React from "react";

export const Paginator = ({ onChangeAction, paginationData }) => {
  const { previousPageNumber, currentPageNumber, nextPageNumber } = paginationData;

  return (
    <p>
      {previousPageNumber && (
        <button onClick={() => onChangeAction(previousPageNumber)}>&#60;&#60; Previous</button>
      )}

      <strong>{currentPageNumber}</strong>

      {nextPageNumber && (
        <button onClick={() => onChangeAction(nextPageNumber)}>Next &#62;&#62;</button>
      )}
    </p>
  );
};

import React from "react";

export const SearchBox = () => {
  return (
    <div>
      <input type="text" placeholder="Search..." />
      <button onClick={() => console.log("click!")}>Search</button>
    </div>
  );
};

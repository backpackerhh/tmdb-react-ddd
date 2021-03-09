import React from "react";
import { Link, useLocation } from "react-router-dom";

export const GoBack = () => {
  const location = useLocation();

  return (
    <p>
      <Link to={location.state.from}>Go Back</Link>
    </p>
  );
};

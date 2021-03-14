import React from "react";
import { useHistory } from "react-router-dom";

export const GoBack = () => {
  const history = useHistory();

  return (
    <p>
      <button onClick={() => history.goBack()}>Go Back</button>
    </p>
  );
};

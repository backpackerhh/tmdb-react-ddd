import React from "react";
import { useHistory } from "react-router-dom";

import "../styles/GoBack.css";

export const GoBack = () => {
  const history = useHistory();

  return (
    <p className="go-back">
      <button onClick={() => history.goBack()}>« Go back</button>
    </p>
  );
};

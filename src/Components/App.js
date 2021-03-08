import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "./Home";
import { MovieDetail } from "./MovieDetail";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/movies/:movieId" exact component={MovieDetail} />
    </Router>
  );
};

export default App;

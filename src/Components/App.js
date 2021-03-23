import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./Home";
import { Search } from "./Search";
import { TopRated } from "./TopRated";
import { MovieDetail } from "./MovieDetail";
import "../styles/App.css";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies/search" exact component={Search} />
          <Route path="/movies/top_rated" exact component={TopRated} />
          <Route path="/movies/:movieId" exact component={MovieDetail} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

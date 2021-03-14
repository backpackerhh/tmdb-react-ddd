import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Home } from "./Home";
import { Search } from "./Search";
import { TopRated } from "./TopRated";
import { MovieDetail } from "./MovieDetail";

const App = () => {
  return (
    <Router>
      <h1>
        <Link to="/">TMDb</Link>
      </h1>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies/search" exact component={Search} />
        <Route path="/movies/top_rated" exact component={TopRated} />
        <Route path="/movies/:movieId" exact component={MovieDetail} />
      </Switch>
    </Router>
  );
};

export default App;

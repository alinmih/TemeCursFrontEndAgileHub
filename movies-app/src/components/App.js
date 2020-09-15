import React from "react";
import MoviesList from "../features/MoviesList";
import MovieDetails from "../features/MovieDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/movies" component={MoviesList} />
          <Route exact path="/movies/:movieId" component={MovieDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

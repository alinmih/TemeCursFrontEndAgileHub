import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import Rating from "./Rating";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie] = useApi(`movies/${movieId}`);
  const history = useHistory();
  const routeChange = () => {
    const path = "/movies";
    history.push(path);
  };

  if (!movie) {
    return <h1>Loading ...</h1>;
  }

  let ratings;
  if (movie.Ratings) {
    ratings = movie.Ratings.map((item) => (
      <Rating key={item.Source} rating={item} />
    ));
  } else {
    ratings = "There are no ratings yet!";
  }

  return (
    <div>
      <h1>{movie.Title}</h1>
      <p>{movie.Genre}</p>
      <p>{movie.Year}</p>
      <div>
        <h3>Ratings</h3>
        {ratings}
      </div>
      <button onClick={routeChange}>Back</button>
    </div>
  );
}

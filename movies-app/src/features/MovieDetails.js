import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie] = useApi(`movies/${movieId}`);
  const history = useHistory();

  const routeChange = () => {
    let path = "/movies";
    history.push(path);
  };

  if (!movie) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div>
      <h1>{movie.Title}</h1>
      <p>{movie.Genre}</p>
      <p>{movie.Year}</p>
      <button onClick={routeChange}>Back</button>
    </div>
  );
}

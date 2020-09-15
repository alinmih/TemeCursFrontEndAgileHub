import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie] = useApi(`movies/${movieId}`);

  if (!movie) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div>
      <h1>{movie.Title}</h1>
    </div>
  );
}

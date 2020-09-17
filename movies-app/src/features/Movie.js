import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

export default function Movie({ movie }) {
  return (
    <React.Fragment key={movie._id}>
      <dt className="movie">
        <h2>{movie.Title}</h2>
        <p>{movie.Genre}</p>
        <p>{movie.Year}</p>

        <Link to={`movies/${movie._id}`}>Details</Link>
      </dt>
    </React.Fragment>
  );
}

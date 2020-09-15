import React from "react";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  return (
    <React.Fragment key={movie._id}>
      <dt>
        <h2>
          {movie.Title}
          <Link to={`movies/${movie._id}`}>{movie.Title}</Link>
        </h2>
      </dt>
    </React.Fragment>
  );
}

import React from "react";
import useApi from "../hooks/useApi";
import Movie from "./Movie";

export default function MoviesList() {
  const [movies] = useApi("movies?take=100");

  if (!movies) {
    return <h1>Loading...</h1>;
  }

  console.log(movies);

  return (
    <>
      <h1>Movies List</h1>
      <dl>
        {movies.results.map((item) => (
          <Movie key={item._id} movie={item} />
        ))}
      </dl>
    </>
  );
}

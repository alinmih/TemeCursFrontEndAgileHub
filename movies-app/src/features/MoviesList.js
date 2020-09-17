import React, { useState } from "react";
import useApi from "../hooks/useApi";
import Movie from "./Movie";
import "./MovieList.css";

export default function MoviesList() {
  const [endPoint, setEndPoint] = useState("movies");

  const [movies] = useApi(endPoint);

  if (!movies) {
    return <h1>Loading...</h1>;
  }

  console.log(endPoint);

  function handlePrev() {
    const prevLink = movies.pagination.links.prev;
    if (prevLink == null) {
      setEndPoint("movies");
    } else {
      setEndPoint("movies?" + prevLink.split("?").pop());
    }
    //const [movies] = useApi("movies");
  }

  function handleNext() {
    const nextLink = movies.pagination.links.next;
    if (nextLink == null) {
      setEndPoint("movies");
    } else {
      setEndPoint("movies?" + nextLink.split("?").pop());
    }
  }

  return (
    <>
      <h1>Movies List</h1>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>

      <dl className="movie-list">
        {movies.results.map((item) => (
          <Movie key={item._id} movie={item} />
        ))}
      </dl>
    </>
  );
}

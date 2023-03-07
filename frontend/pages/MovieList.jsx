import React, { useEffect, useState } from "react";

import expressAPI from "../services/expressAPI";

import MovieCard from "../components/MovieCard";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    expressAPI
      .get("/api/movie")
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-center my-3">Movies</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            name={movie.title}
            description={movie.description}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;

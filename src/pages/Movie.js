import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then((response) => response.json())
      .then((movie) => setMovie(movie));
  } , [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  const movieGenres = movie.genres ? movie.genres.map((genre, index) => {
    return <span key={index}>{genre}</span>;
  }) : null;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title }</h1>
        <p>{movie.time}</p>
        {movieGenres}
      </main>
    </>
  );
};

export default Movie;

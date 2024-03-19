import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavaBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((movies) => setMovies(movies));
  }, []);

  const movieList = movies.map((movie) => {
    return <MovieCard key={movie.id} title={movie.title} id={movie.id} />;
  });

  return (
    <>
      <header>
        <NavaBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movieList}
      </main>
    </>
  );
};

export default Home;

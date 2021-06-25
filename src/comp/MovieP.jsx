import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import { useParams } from "react-router-dom";

// import muv from '../muv.json'

function MovieP() {
  const { q } = useParams();
  const [movie, setmovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setmovies(data.results);
      });
  }, []);

  return (
    <div className="movie-list">
      {movie.map((movie) => (
        <MovieItem data={movie} />
      ))}
    </div>
  );
}

export default MovieP

import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import { useParams } from "react-router-dom";

// import muv from '../muv.json'

function Search() {
  const { q } = useParams();
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/search/movie?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&query='+q+'&page=1')
      .then((res) => res.json())
      .then((data) => {
        setmovies(data.results);
      });
  }, [q]);

  console.log(movies);

  return (
    <div className="movie-list">
      {movies.map((movies) => (
        <MovieItem data={movies} />
      ))}
    </div>
  );
}

export default Search;

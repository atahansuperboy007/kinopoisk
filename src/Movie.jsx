import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const link = "https://image.tmdb.org/t/p/w500";
  const { id } = useParams();

  const [movie, setmovie] = useState();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU   "
    )
      .then((res) => res.json())
      .then((data) => {
        setmovie(data);
      });
  }, []);

  console.log(movie);

  console.log(id);


  if (!movie) return null;

  return (
    <div className="movie">
      <img src={link +movie.poster_path} alt="" />
      <div className="movie-text">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
      <div className="movie-info">
        <h1>Сайт фильма:</h1>
        <h3>{movie.homepage}</h3>
        <h3>Дата выхода:</h3>
        <h4>{movie.release_date}</h4>
        <h3>Продолжительность:</h3>
        <h4>{movie.runtime}</h4>
        <h3>Оценка зрителей:</h3>
        <h4>{movie.vote_average}</h4>
      </div>
    </div>
  );


}



export default Movie;

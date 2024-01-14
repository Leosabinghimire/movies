import { useEffect, useState } from "react";

import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";
//b4e18921
const API_URL = "http://www.omdbapi.com?apikey=b4e18921";

const movies1 = {
  Title: "Fighting, Flying and Driving: The Stunts of Spiderman 3",
  Year: "2007",
  imdbID: "tt1132238",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setmovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title} `);
    const data = await response.json();

    setmovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h2>MoviesBoom</h2>

      <div className="search">
        <input
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

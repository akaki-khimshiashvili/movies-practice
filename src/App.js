import { useState } from "react";
import "./App.css";

function App() {
  return <DisplayMovies />;
}

function DisplayMovies() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8 },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      genre: "Action",
      rating: 9.0,
    },
    { id: 3, title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6 },
    { id: 4, title: "Parasite", year: 2019, genre: "Thriller", rating: 8.6 },
    {
      id: 5,
      title: "The Shawshank Redemption",
      year: 1994,
      genre: "Drama",
      rating: 9.3,
    },
  ]);

  function handleDelete(id) {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  }

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie, id) => (
          <>
            <li key={id}>
              <strong>{movie.title}</strong> ({movie.year}) - {movie.genre} |
              Rating: {movie.rating}
            </li>
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import Movies from "./Movies";

export function DisplayMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies.json")
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => setMovies(data)) // Set the fetched data into state
      .catch((error) => console.error("Error Fetching data ", error));
  }, []);

  function handleDelete(id) {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  }

  return <Movies movies={movies} onDelete={handleDelete} />;
}

import React from "react";

export default function Movie({ movie, onDelete }) {
  return (
    <div>
      <h2>
        {movie.title} - {movie.year}, {movie.genre}
      </h2>
      <button onClick={() => onDelete(movie.id)}>Delete</button>
    </div>
  );
}

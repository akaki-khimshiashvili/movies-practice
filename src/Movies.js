import Movie from "./Movie";

export default function Movies({ movies, onDelete }) {
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} onDelete={onDelete} />
      ))}
    </div>
  );
}

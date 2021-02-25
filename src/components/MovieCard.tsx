import React from "react";
import { Link } from "react-router-dom";

type Props = {
  movie: Movie;
};
export type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export default function MovieCard({ movie }: Props) {
  return (
    <div
      style={{
        width: "25%",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <Link to={`/movie/${movie.imdbID}`}>
        {movie.Title} ({movie.Year})
      </Link>
      <img src={movie.Poster} alt={`${movie.Title}'s poster`} />
    </div>
  );
}

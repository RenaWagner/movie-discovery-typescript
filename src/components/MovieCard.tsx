import React from "react";

type Props = {
  movie: Movie;
};
type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export default function MovieCard(props: Props) {
  return (
    <div>
      {props.movie.Title} ({props.movie.Year})
    </div>
  );
}

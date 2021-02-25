import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type Params = {
  imdbID: string;
};

type Movie = {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Production: string;
  Ratings: Ratings[];
  Response: string;
  Runtime: string;
  Website: string;
  Writer: string;
  imdbRating: string;
  imdbVotes: string;
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Rated: string;
  Released: string;
};

type Ratings = {
  Source: string;
  Value: string;
};

export default function MoviePage() {
  const routeParams = useParams<Params>();
  const id: string = routeParams.imdbID;
  //   console.log(id);

  const [movieData, setMovieData] = useState<Movie>(); //because you are only downloading one object
  const apiKey = 19062065;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://omdbapi.com/?apikey=${apiKey}&i=${id}`
      );
      setMovieData(res.data);
    };
    fetchData();
  }, [id]);

  console.log(movieData);

  return (
    <div>
      {/* <p>{routeParams}</p>  //Didn't work out */}
      {movieData ? (
        <div>
          <h2>
            {movieData.Title} ({movieData.Year})
          </h2>
          <div>
            <img src={movieData.Poster} alt={`${movieData.Title}'s Poster`} />
            <p>IMDB Rating: {movieData.imdbRating}</p>
            <p>Director: {movieData.Director}</p>
            <p>Runtime: {movieData.Runtime}</p>
            <p>Genre: {movieData.Genre}</p>
            <p>Plot: {movieData.Plot}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

export default function DiscoverMoviesPage() {
  const [searchText, setSearchText] = useState("");
  const [searchState, setSearchState] = useState<SearchState>({
    status: "idle",
  });
  const apiKey = 19062065;
  const queryParam = encodeURIComponent(searchText);

  type SearchState =
    | { status: "idle" }
    | { status: "loading" }
    | { status: "success"; movieData: Movie[] }
    | { status: "error"; error: any };

  type Movie = {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  };

  const search = async () => {
    setSearchState({ status: "loading" });

    const res = await axios.get(
      `https://omdbapi.com/?apikey=${apiKey}&s=${queryParam}`
    );
    console.log(res);
    setSearchState({
      status: "success",
      movieData: res.data.Search,
    });
  };
  console.log(searchState);

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      {searchState.status == "loading" && <p>{searchState.status}</p>}
      {searchState.status === "success" &&
        searchState.movieData.map((item) => {
          return <MovieCard key={item.imdbID} movie={item} />;
        })}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/MovieCard";

type Param = {
  searchText: string;
};

export default function DiscoverMoviesPage() {
  const [searchText, setSearchText] = useState("");
  const [searchState, setSearchState] = useState<SearchState>({
    status: "idle",
  });
  const apiKey = 19062065;
  //   const queryParam = encodeURIComponent(searchText);
  const history = useHistory();
  const route_parameter = useParams<Param>();
  const searchWord = route_parameter.searchText;
  console.log(searchWord);

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

  const navigateSearch = () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      setSearchState({ status: "loading" });
      const res = await axios.get(
        `https://omdbapi.com/?apikey=${apiKey}&s=${searchWord}`
      );
      setSearchState({
        status: "success",
        movieData: res.data.Search,
      });
    };
    fetchData();
    setSearchText("");
  }, [searchWord]);

  //   const search = async () => {
  //     setSearchState({ status: "loading" });

  //     const res = await axios.get(
  //       `https://omdbapi.com/?apikey=${apiKey}&s=${queryParam}`
  //     );
  //     console.log(res);
  //     setSearchState({
  //       status: "success",
  //       movieData: res.data.Search,
  //     });
  //     setSearchText("");
  //   };

  console.log(searchState);

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={navigateSearch}>Search</button>
      </p>
      {searchState.status === "loading" && <p>{searchState.status}</p>}
      {searchState.status === "success" &&
        searchState.movieData.map((item) => {
          return <MovieCard key={item.imdbID} movie={item} />;
        })}
    </div>
  );
}

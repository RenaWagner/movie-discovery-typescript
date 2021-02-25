import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import DiscoverMoviesPage from "./Pages/DiscoverMoviesPage";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import NavBar from "./components/NavBar";
import MoviePage from "./Pages/MoviePage";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Switch>
        <Route path="/movie/:imdbID" component={MoviePage} />
        <Route path="/discover/:searchText?" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

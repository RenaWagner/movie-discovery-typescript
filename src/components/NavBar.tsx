import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="mt-5 mb-3">
      <NavLink
        to="/discover"
        activeStyle={{
          fontWeight: "bold",
        }}
        className="btn btn-outline-dark mr-3"
      >
        Discover Movies
      </NavLink>
      <NavLink
        to="/about"
        activeStyle={{
          fontWeight: "bold",
        }}
        className="btn btn-outline-dark mr-3"
      >
        About
      </NavLink>
      <NavLink
        exact
        to="/"
        activeStyle={{
          fontWeight: "bold",
        }}
        className="btn btn-outline-dark mr-3"
      >
        Home
      </NavLink>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaUserCircle } from 'react-icons/fa'
const Header = () => {
  return (
    <div className="header flex max-width">
      <div className="header__left flex absolute-center">
        <Link to="/">
          <img
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }} className="link">
          Popular
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}className="link">
          Top Rated
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}className="link">
          Upcoming
        </Link>
      </div>
      <div className="header__right flex absolute-center">
        <FaUserCircle className="user"/>
      </div>
    </div>
  );
};

export default Header;

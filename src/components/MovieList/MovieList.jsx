import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";



const apikey = process.env.REACT_APP_API_KEY;

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=${apikey}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
     
  };

  return (

 
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie, id) => (
          <Card movie={movie} key={id}/>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";

const Home = () => {
  const apikey = process.env.REACT_APP_API_KEY;
  const [popularMovies, setPopularMoves] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setPopularMoves(data.results));
  }, []);
  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
          {popularMovies ? (
                    popularMovies.map((movie, index) => (
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to={`/movie/${movie.id}`}
                      >
                        <div className="posterimage" key={index}>
                          <img
                            src={`https://image.tmdb.org/t/p/original${
                              movie && movie.backdrop_path
                            }`}
                          />
                          <div className="posterimage__overlay">
                            <div className="posterimage__title">
                              {movie ? movie.original_title : " "}
                            </div>
                            <div className="posterimage__runtime">
                              {movie ? movie.release_date : ""}
                              <span className="posterimage__rating">
                                {movie ? movie.vote_average : ""}
                                <i className="fas fa-star" />
                              </span>
                            </div>
                            <div className="posterimage__description">
                              {movie ? movie.overview : ""}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
          ) : (
            <h1>Loading</h1>
          )}
      </Carousel>
      <MovieList />
    </div>
  );
};

export default Home;

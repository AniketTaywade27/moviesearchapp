import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("movie");
  const [isDataAvaliable, setIsDataAvaliable] = useState(true);

  const getMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=67860f91&s=${searchKeyword}`
      );

      console.log(data?.Search);
      if (data?.Response == "True") {
        setMovieData(data?.Search);
        setIsDataAvaliable(true);
      }
      if (data?.Response == "False") {
        setIsDataAvaliable(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [searchKeyword]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchKeyword(inputValue);
  };

  console.log("value", inputValue);

  return (
    <>
      <div className="container-fluid">
        <div className="row px-4">
          <div className="col-6 d-flex flex-column gap-4">
            <div>
              {" "}
              <h1 className="text-dark" style={{ fontSize: "40px" }}>
                Search your movies here
              </h1>
              <p className="text-dark" style={{ fontSize: "12px" }}>
                A movie search app is a digital application that allows users to
                find information about movies by searching using keywords like
                title, actor, director, or genre, providing details such as plot
                summaries, release dates, ratings, cast, posters, and often
                where to stream the movie on various platforms
              </p>
            </div>
            <div className="d-flex gap-2">
              <input
                type="text"
                className="input-field w-75 border-1 rounded px-2"
                placeholder="Search your favourite movie here..."
                value={inputValue}
                onChange={handleInputChange}
              ></input>
              <button
                className="w-25 border-1 rounded search-button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="row px-4 my-5 row-gap-5 gap-3 justify-content-between">
          {isDataAvaliable ? (
            movieData?.map((movie) => {
              return (
                <div className="col-2" key={movie?.imdbID}>
                  <NavLink
                    className={"text-decoration-none"}
                    to={`/modal/${movie?.imdbID}`}
                  >
                    <div className="card-bg rounded">
                      <div>
                        <img
                          src={movie?.Poster}
                          alt="poster"
                          className="movie-card p-2 pb-0"
                        ></img>
                      </div>
                      <div className="py-2">
                        <p className="text-dark fs-5 text-center m-0 text-overflow px-2">
                          {movie?.Title}
                        </p>
                        <p className="text-dark fs-5 text-center m-0 text-overflow px-2">
                          {movie?.Year}
                        </p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            })
          ) : (
            <h1 className="fs-1 text-center">No data avaliable</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

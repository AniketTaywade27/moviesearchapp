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
    const {data} = await axios.get(
        `http://www.omdbapi.com/?apikey=67860f91&s=${searchKeyword}`
      );
      
      console.log(data?.Search);
      if(data?.Response == "True"){
        setMovieData(data?.Search);
        setIsDataAvaliable(true);
      }
      if(data?.Response == "False"){
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
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
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
          { isDataAvaliable? movieData?.map((movie) => {
            return (
              <div className="col-2" key={movie?.imdbID}>
                <NavLink className={"text-decoration-none"} to={`/modal/${movie?.imdbID}`}>
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
          }) : <h1 className="fs-1 text-center">No data avaliable</h1>}
        </div>
      </div>
    </>
  );
};

export default Home;

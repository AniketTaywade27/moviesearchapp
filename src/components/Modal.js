import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Modal = () => {
  const { id } = useParams();

  const [singleMovie, setSingleMovie] = useState("");

  const [isDataAvaliable, setIsDataAvaliable] = useState(true);

  const getSingleMovie = async () => {
    try {
      const data = await axios.get(
        `http://www.omdbapi.com/?apikey=67860f91&i=${id}`
      );

      console.log(data?.data);
      if (data?.data?.Response == "True") {
        setSingleMovie(data?.data);
        setIsDataAvaliable(true);
      }
      if (data?.data?.Response == "False") {
        setIsDataAvaliable(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleMovie();
  }, [id]);

  return (
    <div className="container-fluid">
        
      <div className="row px-4">
        <div className="col-4">
          <div>
            <img
              src={singleMovie?.Poster}
              alt="movie poster"
              className="single-movie"
            ></img>
          </div>
        </div>
        <div className="col-8">
          <div>
            <h1 className="text-dark">{singleMovie?.Title}</h1>
          </div>
          <div>
            <p style={{ fontWeight: 500, fontSize: 20, color: "gray" }}>
              Plot: <p style={{ color: "black" }}> {singleMovie?.Plot}</p>
            </p>
          </div>
          <div>
            <p style={{ fontWeight: 500, fontSize: 20, color: "gray" }}>
              Awards: <p style={{ color: "black" }}> {singleMovie?.Awards}</p>
            </p>
          </div>
          <div>
            <p style={{ fontWeight: 500, fontSize: 20, color: "gray" }}>
            Genre: <p style={{ color: "black" }}> {singleMovie?.Genre}</p>
            </p>
          </div>

          <div>
            <p style={{ fontWeight: 500, fontSize: 20, color: "gray" }}>
            IMDB Rating: <p style={{ color: "black" }}> {singleMovie?.imdbRating}</p>
            </p>
          </div>

          <div>
            <p style={{ fontWeight: 500, fontSize: 20, color: "gray" }}>
            Actors: <p style={{ color: "black" }}> {singleMovie?.Actors}</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

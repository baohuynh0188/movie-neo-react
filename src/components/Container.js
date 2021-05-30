import { React, useState, useEffect } from "react";
import Carousel from "./Carousel";
import Item from "./Item";
import ListGroup from "./ListGroup";
import movieApi from "../api/movieApi";
import genreApi from "../api/genreApi";

const Container = () => {
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await movieApi.getAll();
        if (response !== undefined) {
          setMovie(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    const fetchGenres = async () => {
      try {
        const response = await genreApi.getAll();
        setGenre(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
    fetchGenres();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Carousel />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <h1 className="my-4">Genre</h1>
          <ListGroup genres={genre} />
        </div>
        <div className="col-lg-9">
          <div className="row my-4">
            <Item movies={movie} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;

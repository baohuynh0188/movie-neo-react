import { React, useState, useEffect } from "react";
import Carousel from "./Carousel";
import Pagination from "./Pagination";
import Item from "./Item";
import ListGroup from "./ListGroup";
import movieApi from "../api/movieApi";
import genreApi from "../api/genreApi";

const Container = () => {
  const [movie, setMovie] = useState([]);
  const [movieFilter, setMovieFilter] = useState([]);
  const [genre, setGenre] = useState([]);
  const [loading, setLoading] = useState(false);


  // const [currentPage, setCurrentPage] = useState(1);
  // const [moviesPerPage, setMoviesPerPage] = useState(5);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await movieApi.getAll();
        if (response !== undefined) {
          setMovie(response.data);
          setMovieFilter(response.data)
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

  // const indexOfLastMovie = currentPage * moviesPerPage;
  // const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  // const currentMovies = movie.slice(indexOfFirstMovie, indexOfLastMovie);

  const funcFilterGenres = (e) => {
    var a = movie.filter((item) => item.genres.includes(e.target.value));
    setMovieFilter(a)
  }

  const funcFilterYear = (e) => {
    var a = movie.filter((item) => item.movie.year.includes(e.target.value));
    setMovieFilter(a)
  }

  // const paginate = (pageNumbers) => {
  //   return setCurrentPage(pageNumbers)
  // }

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-3"></div>
        <div className="col-9">
          <div className="row">
            <div className="col-3">
              <select className="form-select" onChange={(e) => funcFilterGenres(e)}>
                {genre.map((item, index) => <option key={index} value={item.name}>{item.name}</option>)}
              </select>
            </div>
            <div className="col-3">
              <select className="form-select" onChange={(e) => funcFilterYear(e)}>
                {[...new Set(movie.map((item) => item.movie.year))].map((item, index) => <option key={index} value={item}>{item}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <h1 className="my-4">Genre</h1>
          <ListGroup genres={genre} />
        </div>
        <div className="col-lg-9">
          <div className="row row-cols-3 gx-4 gy-4 my-4">
            <Item movies={movieFilter} loading={loading} />
            {/* <Pagination moviesPerPage={moviesPerPage} totalMovies={movie.length} paginate={paginate} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;

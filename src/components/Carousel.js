import React from "react";
import { Link } from "react-router-dom";

const Carousel = (props) => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {props.movies.slice(0, 5).map((item, index) => (
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : "false"}></button>
        ))}
      </div>
      <div className="carousel-inner">
        {props.movies.slice(0, 5).map((item, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <Link to={item.movie.slug}>
              <img src={`http://127.0.0.1:9000/${item.movie.poster}`} className="d-block w-100 image" alt="" />
            </Link>
            <div className="carousel-caption d-none d-md-block">
              <h1 className="title-carousel">{item.movie.title}</h1>
              <p>{item.movie.content.substring(0, 50)}</p>
              <small className="fst-italic">{item.movie.language} - </small>
              <small className="fst-italic">{item.movie.duration} minutes - </small>
              <small className="fst-italic">{item.movie.year}</small>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;

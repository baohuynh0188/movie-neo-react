import React from "react";
import Carousel from "./Carousel";
import Item from "./Item";
import ListGroup from "./ListGroup";
import { movies } from "../data/movies";
import { genres } from "../data/genres";

const Container = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <h1 className="my-4">Genre</h1>
          <ListGroup genres={genres} />
        </div>
        <div className="col-lg-9">
          {/* <Carousel /> */}
          <div className="row my-4"></div>
          <div className="row">
            <Item movies={movies} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;

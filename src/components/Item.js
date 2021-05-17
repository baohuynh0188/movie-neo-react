import React from "react";
import Card from "./Card";
import { movies } from "../data/movies";

const Item = () => {
  return (
    <>
      {movies.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          genre={item.genre}
          url={item.url}
          img={item.img}
        />
      ))}
    </>
  );
};

export default Item;

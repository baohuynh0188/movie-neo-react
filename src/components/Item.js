import React from "react";
import Card from "./Card";

const Item = (props) => {
  return (
    <>
      {props.movies.map((item, index) => (
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

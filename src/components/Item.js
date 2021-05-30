import React from "react";
import Card from "./Card";

const Item = (props) => {
  if (props.loading === true) {
    return (
      <div className="col-lg-12 my-4">
        <h1 className="text-center">Loading...</h1>
      </div>
    );
  }
  return (
    <>
      {props.movies.map((item, index) => (
        <Card
          key={index}
          id={item.movie.id}
          title={item.movie.title}
          content={item.movie.content}
          duration={item.movie.duration}
          language={item.movie.language}
          timestamp={item.movie.timestamp}
          year={item.movie.year}
          genres={item.genres}
          slug={item.movie.slug}
          poster={item.movie.poster}
        />
      ))}
    </>
  );
};

export default Item;

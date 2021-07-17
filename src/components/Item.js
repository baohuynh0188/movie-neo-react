import React from "react";
import Card from "./Card";
import LazyLoad from 'react-lazyload'

const Loading = () => (
  <div className="post loading">
    <h5>Loading...</h5>
  </div>
)

const Item = (props) => {
  if (props.loading === true) {
    return (
      <div className="col-lg-12 my-4">
        <h1 className="text-center">Please sign in to watch movie.</h1>
      </div>
    );
  } else if (props.notFound === true) {
    return (
      <div className="col-lg-12 my-4">
        <h1 className="text-center">Not found</h1>
      </div>
    );
  }
  return (
    <>
      {props.movies.map((item, index) => (
        <LazyLoad key={item.movie.id} placeholder={<Loading />} height={100}
          offset={[-100, 100]} classNamePrefix="col-lg-4 col-md-6 mb-4">
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
            country={item.country}
          />
        </LazyLoad>
      ))}
    </>
  );
};

export default Item;

import React from "react";
import ListGroupItem from "./ListGroupItem";

const ListGroup = (props) => {
  return (
    <div className="list-group">
      {props.genres.map((item, index) => (
        <ListGroupItem key={index} title={item.title} url={item.url} />
      ))}
    </div>
  );
};

export default ListGroup;

import React from "react";
import ListGroupItem from "./ListGroupItem";

const ListGroup = (props) => {
  return (
    <div className="list-group">
      {props.genres.map((item, index) => (
        <ListGroupItem key={index} name={item.name} url={item.name} />
      ))}
    </div>
  );
};

export default ListGroup;

import React from "react";
import ListGroupItem from "./ListGroupItem";
import { genres } from "../data/genres";

const ListGroup = () => {
  return (
    <div className="list-group">
      {genres.map((item, index) => (
        <ListGroupItem key={index} title={item.title} url={item.url} />
      ))}
    </div>
  );
};

export default ListGroup;

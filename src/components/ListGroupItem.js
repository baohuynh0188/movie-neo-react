import React from "react";
import { Link } from "react-router-dom";

const ListGroupItem = (props) => {
  return (
    <>
      <Link to={"genre/" + props.url} className="list-group-item">
        {props.name}
      </Link>
    </>
  );
};

export default ListGroupItem;

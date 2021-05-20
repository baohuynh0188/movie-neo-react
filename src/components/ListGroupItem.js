import React from "react";

const ListGroupItem = (props) => {
  return (
    <>
      <a className="list-group-item" href={props.url}>
        {props.name}
      </a>
    </>
  );
};

export default ListGroupItem;

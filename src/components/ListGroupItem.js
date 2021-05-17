import React from "react";

const ListGroupItem = (props) => {
  return (
    <>
      <a className="list-group-item" href={props.url}>
        {props.title}
      </a>
    </>
  );
};

export default ListGroupItem;

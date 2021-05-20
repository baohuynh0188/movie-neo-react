import React from "react";

const Badge = (props) => {
  return props.genre.map((item, index) => (
    <span key={index} className="badge badge-pill badge-info mr-2">
      {item}
    </span>
  ));
};

export default Badge;

import React from "react";

const Header = (props) => {
  return (
    <header>{/* <h1 style={headingStyle}>Header {props.title}</h1> */}</header>
  );
};

Header.defaultProps = {
  title: "MovieNeo",
};

// const headingStyle = {
//   color: "red",
//   backgroundColor: "blue",
// };

export default Header;

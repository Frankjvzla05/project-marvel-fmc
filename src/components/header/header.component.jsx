import React from "react";
import { Link } from "react-router-dom";
// import control from "../../assets/img/control.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Marvel Studios</h1>
      </Link>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
  `;

  return (
    <div className="header">
      <Link to="/">
        {/* <h1>Marvel Studios</h1> */}
        <Title>Marvel Studios</Title>
      </Link>
    </div>
  );
};

export default Header;

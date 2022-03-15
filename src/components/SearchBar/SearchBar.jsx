import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WrapperBar = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 5%;
  @media only screen and (max-width: 64em) {
    margin-top: 12%;
  }
`;

const SearchInput = styled.input`
  font-size: 1.2rem;
  height: 50px;
  width: 60%;
  text-align: center;
  background-color: #78736b3b;
  color: #000;
  box-sizing: border-box;
  border: none;
`;

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <WrapperBar>
      <SearchInput
        type="text"
        placeholder="Buscar Personajes"
        value={query}
        onChange={handleChange}
      />
      <Link to={`/search/${query}`} className="buttonSearch">
        Buscar
      </Link>
    </WrapperBar>
  );
};
export default SearchBar;

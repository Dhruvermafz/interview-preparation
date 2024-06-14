import React, { useState } from "react";
import styled from "styled-components";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    onSearch(input);
    setInput("");
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city or zip code"
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Input = styled.input`
  padding: 10px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  font-size: 1rem;
`;

const SearchButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;

export default SearchBar;

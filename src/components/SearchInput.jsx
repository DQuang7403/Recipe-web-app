import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import searchIcon from "../assets/magnifying-glass.png";
export default function SearchInput() {
  const [Search, setSearch] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if(Search === "") return;
    navigate("/recipe/search/" + Search);
    console.log(Search);
  };
  return (
    <>
      <form onSubmit={submitHandler} style={{ display: "flex" , marginInline:".8em"}}>
        <StyledSearch
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          name="search"
          id="search"
        />
        <ButtonStyle type="submit">
          <img src={searchIcon} />
        </ButtonStyle>
      </form>
    </>
  );
}
const StyledSearch = styled.input`
  width: clamp(1em, 35vw, 10em);
  padding: 0.6em 0.5em;
  border-radius: 12px;
  margin-right: 0.8em;
  font-size: 1.2rem;
  background-color: #d9d9d9;
  border: 0;
  flex: 1;
`;
const ButtonStyle = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 2px solid var(--primary-color);
  cursor: pointer;
  width: clamp(1em, 100%, 3em);
  img {
    width: clamp(1em, 100%, 3em);
  }
`;

import styled from "styled-components";
import searchIcon from "../assets/magnifying-glass.png";
import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function MealPlanning() {
  const [ingredient, setIngredient] = useState("");
  const navi = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    if (ingredient === "") return;
    navi("/Nutrition/Detail/" + ingredient);
    setIngredient("");
  }

  return (
    <Component>
      <h1>Nutrition</h1>
      <form
        id="nutritionForm"
        onSubmit={submitHandler}
        style={{ display: "flex", marginInline: ".8em" }}
      >
        <StyledSearch
          type="text"
          placeholder="Know more about you food"
          onChange={(e) => {
            setIngredient(e.target.value);
          }}
        />
        <ButtonStyle type="submit">
          <img src={searchIcon} />
        </ButtonStyle>
      </form>
      <Outlet />
    </Component>
  );
}
const Component = styled.section`
  h1 {
    margin: 2em 0 1em 0;
    font-size: 2rem;
  }
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const StyledSearch = styled.input`
  width: clamp(3em, 75vw, 30em);
  padding: 0.6em 0.5em;
  border-radius: 12px;
  margin-right: 0.8em;
  font-size: 1.2rem;
  background-color: #d9d9d9;
  border: 0;
  flex: 1;
  @media (width <= 750px) {
    font-size: 14px ;
  }
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
    width: 40px;
  }
  
`;

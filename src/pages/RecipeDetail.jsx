import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import love from "../assets/love.png";
import available from "../assets/available.png";
import servingDish from "../assets/serving-dish.png";

export default function RecipeDetail() {
  const dish = useParams();
  const [dishDetails, setDishDetails] = useState({});
  const [active, setActive] = useState("instruction");
  const getRecipeDetail = async (name) => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await res.json();
    setDishDetails(data);
    console.log(data);
  };
  useEffect(() => {
    getRecipeDetail(dish.id);
  }, [dish.id]);
  return (
    <>
      <h2>{dishDetails.title}</h2>
      <Warpper>
        <div>
          <img style={{marginTop: "3.4em"}} src={dishDetails.image} alt={dishDetails.title} />
          <h2><img src={love} style={{width:"1em", borderRadius: "0", marginRight:"1.1em"}}/>Likes : {dishDetails.aggregateLikes}</h2>
          <h2><img src={available} style={{width:"1em", borderRadius: "0", marginRight:"1.1em"}}/>Ready in: {dishDetails.readyInMinutes} minute</h2>
          <h2><img src={servingDish} style={{width:"1em", borderRadius: "0", marginRight:"1.1em"}}/>Serving: {dishDetails.servings}</h2>
        </div>
        <Container>
          <div className="buttons">
            <Button
              className={active === "instruction" ? "active" : ""}
              onClick={() => setActive("instruction")}
            >
              Instruction
            </Button>
            <Button
              className={active === "ingredient" ? "active" : ""}
              onClick={() => setActive("ingredient")}
            >
              Ingredient
            </Button>
          </div>
          {active === "instruction" && (
            <div className="instruction">
              <h2>Instructions</h2>
              <h4
                dangerouslySetInnerHTML={{ __html: dishDetails.instructions }}
              ></h4>
              <h2>Summary</h2>
              <p dangerouslySetInnerHTML={{ __html: dishDetails.summary }}></p>
            </div>
          )}
          {active === "ingredient" && (
            <ul>
              {dishDetails.extendedIngredients.map((ingredient) => {
                return <li key={ingredient.original}>{ingredient.original}</li>;
              })}
            </ul>
          )}
        </Container>
      </Warpper>
    </>
  );
}
const Warpper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2em;
  width: 60vw;
  margin-bottom: 2em;
  h2{
    border-bottom:1px solid black;
    padding: .4em 0;
    justify-self: center;
    display: flex;
    align-items: center;
  }
  img {
    width: 20em;
    border-radius: 12px;
    
  }
  .active {
    background-color: var(--primary-color);
    color: white;
    cursor: default;
  }
  .buttons {
    display: flex;
    align-items: center;
    gap: 20%;
  }
  a {
    color: inherit;
  }
  @media (width <= 900px) {
    flex-direction: column;
    align-items: center;
    width: 90vw;
  }
`;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2em;
  margin: 0 3em;
  flex-grow: 1;
  
  .instruction {
    line-height: 1.5em;
    a{
      text-decoration: none;
    }
  }
  b{
    color: darkblue;
  }
  h4{
    margin-bottom: 1em;

  }
`;

const Button = styled.button`
  background-color: #d9d9d9;
  font-size: 0.9rem;
  padding: 0.4em 1.2em;
  border: none;
  border-radius: 11px;
  cursor: pointer;
`;

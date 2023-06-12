import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Cuisine() {
  const id = useParams();
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getCuisine(id.type);
  }, [id.type]);
  const getCuisine = async (name) => {
    const checked = localStorage.getItem(name);
    if (checked) {
      setRecipes(JSON.parse(checked));
    } else {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=10&cuisine=${name}`
      );
      const data = await res.json();
      setRecipes(data.results);
      localStorage.setItem(name, JSON.stringify(data.results));
    }
  };
  return (
    <Grid>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <Link to={"/Recipe/Detail/" + recipe.id}>
              <img src={recipe.image} alt="" />
              <h4>{recipe.title}</h4>
            </Link>
          </div>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  margin-top: 2em;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3em;
  img {
    width: 100%;
    border-radius: 12px;
  }
  h4 {
    text-align: center;
    padding-top: 1em;
  }
  a{
    color: var(--primary-color);
    text-decoration: none;
  }
`;

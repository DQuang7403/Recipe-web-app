import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {Link} from "react-router-dom"

export default function Dessert() {
  const [desserts, setDesserts] = useState([])
  
  useEffect(() => {
    getDessert();
  }, []);
  const getDessert = async () => {
    const check = localStorage.getItem("dessert")
    if(check){
      setDesserts(JSON.parse(check))
    }else{
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=10&tags=dessert`
      );
      const data = await response.json();
      setDesserts(data.recipes)
      console.log(data.recipes)
      localStorage.setItem("dessert", JSON.stringify(data.recipes));
    }
    
  };
  return (
    <Wrapper>
      <h2>Dessert</h2>
      <Splide
        options={{
          pagination: false,
          perPage: 5,
          arrows: false,
          drag: "free",
          gap: "1em",
          breakpoints: {
            950: {
              perPage: 3,
            },
          }
        }}
      >
        {desserts.map((dessert) => {
          return (
            <SplideSlide key={dessert.id}>
              <Dish >
                <Link to={"/Recipe/Detail/" + dessert.id}>
                <img src={dessert.image} alt={dessert.title} />
                <p>{dessert.title}</p>
                </Link>
              </Dish>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 1em 8%;
  h2 {
    color: #193452;
    margin: 1em;
  }
`;
const Dish = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20em;
  margin: 0;
  p {
    font-size: 1rem;
    text-align: center;
    font-weight: 600;
    margin-top: .6em;
  }
  img {
    object-fit: cover;
    border-radius: 10px;
    width: 100%;
  }
  a{
    color: var(--primary-color);
    text-decoration: none;
    transition: transform ease-in-out 200ms;
    :hover{
      transform: scale(1.05, 1.05);
    }
  }
`;

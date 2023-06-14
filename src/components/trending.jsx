import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
export default function Trending() {
  const [populars, setPopulars] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopulars(JSON.parse(check));
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=10`
      );
      const data = await response.json();
      setPopulars(data.recipes);
      localStorage.setItem("popular", JSON.stringify(data.recipes));
    }
  };
  return (
    <>
      <h2>Trending</h2>
      <Wrapper>
        {populars.map((popular) => {
          return (
            <Dish key={popular.id}>
              <Link to={"/Recipe/Detail/" + popular.id}>
                <img src={popular.image} alt="No Image" />
                <p>{popular.title}</p>
              </Link>
            </Dish>
          );
        })}
      </Wrapper>
    </>
  );
}
const Wrapper = styled.section`
  display: flex;
  overflow-x: hidden;
  /* width: 100vw; */
  gap: 32px; 
  scroll-behavior: smooth;
  overflow-x: scroll;
`;

const Dish = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20em;
  p {
    font-size: 1rem;
    text-align: center;
    font-weight: 600;
    margin-top: 0.6em;
  }
  img {
    object-fit: cover;
    border-radius: 15px;
    width: 100%;
    height: 100%;
  }
  a {
    color: var(--primary-color);
    text-decoration: none;
  }
`;

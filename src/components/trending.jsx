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
    <Wrapper>
      <h2>Trending</h2>
      <Splide
        options={{
          pagination: false,
          perPage: 4,
          arrows: false,
          drag: "free",
          gap: "1em",
          breakpoints: {
            950: {
              perPage: 2,
            },
          },
        }}
      >
        {populars.map((popular) => {
          return (
            <SplideSlide key={popular.id}>
              <Dish>
                <Link to={"/Recipe/Detail/" + popular.id}>
                  <img src={popular.image} alt="No Image" />
                  <p>{popular.title}</p>
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
    margin-top: 1em;
  }
`;
const Dish = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20em;
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
  a{
    color: var(--primary-color);
    text-decoration: none;
  }
`;

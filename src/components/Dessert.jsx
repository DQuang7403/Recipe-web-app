import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import likes from "../assets/love.png";
import stopwatch from "../assets/speedometer.png";
import clock from "../assets/clock.png";
export default function Dessert() {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    getDessert();
  }, []);
  const getDessert = async () => {
    const check = localStorage.getItem("dessert");
    if (check) {
      setDesserts(JSON.parse(check));
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=10&tags=dessert`
      );
      const data = await response.json();
      setDesserts(data.recipes);
      console.log(data.recipes);
      localStorage.setItem("dessert", JSON.stringify(data.recipes));
    }
  };
  return (
    <Wrapper>
      <h2>Dessert</h2>
      <div className="slider snaps-inline">
        {desserts.map((dessert) => {
          return (
            <Dish key={dessert.id}>
              <Link to={"/Recipe/Detail/" + dessert.id}>
                <img src={dessert.image} alt="No Image" />
                <div className="overview">
                  <h4>{dessert.title}</h4>
                  <p>
                    <img src={likes} />
                    {dessert.aggregateLikes} like
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: ".5em",
                      flexWrap: "wrap",
                      alignItems:"center"
                    }}
                  >
                    <p>
                      <img src={stopwatch} />
                      {dessert.readyInMinutes} minutes
                    </p>{" "}
                    <p>
                      <img src={clock}></img>Health Score: {dessert.healthScore}
                    </p>
                  </div>
                </div>
              </Link>
            </Dish>
          );
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  /* background: var( --background-green-color); */
  padding-bottom: 1em;
  margin: 0 5%;
  width: 100vw;
  h2 {
    padding: 1.5rem;
  }
  .slider {
    margin-inline: 1em;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 21%;
    gap: 1rem;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
  }
  .snaps-inline {
    scroll-snap-type: inline mandatory;
  }
  .snaps-inline > * {
    scroll-snap-align: start;
    scroll-padding-inline: 1.5em;
  }
  @media (width <= 1024px) {
    .slider {
      grid-auto-columns: 25%;
    }
  }
  @media (width <= 750px) {
    .slider {
      grid-auto-columns: 35%;
    }
  }
  @media (width <= 500px) {
    .slider {
      grid-auto-columns: 100%;
    }
  }
`;
//550
const Dish = styled.div`
  max-width: 25em;
  border-radius: 15px;
  display: grid;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25));
  background: #ffffff;
  h4 {
    margin: 0.5em;
  }
  p {
    display: flex;
    align-items: center;
    gap: 0.5em;
    font-size: .8rem;
    text-align: center;
    font-weight: 600;
    margin-top: 0.6em;
    margin-left: 0.5em;
  }
  p:last-child {
    margin-bottom: 0.6em;
  }

  img {
    object-fit: cover;
    border-radius: 15px 15px 0 0;
    inline-size: 100%;
    aspect-ratio: 16/9;
  }
  .overview {
    p {
      color: #6f737a;
    }
    img {
      width: 20px;
      aspect-ratio: 1;
      border-radius: 0;
    }
  }
  a {
    color: var(--primary-color);
    text-decoration: none;
  }
`;

import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import likes from "../assets/love.png"
import stopwatch from "../assets/speedometer.png"
import clock from "../assets/clock.png"
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
      {/* {console.log(populars[0].extendedIngredients[0].aisle)} */}
      <h2>Trending</h2>
      <div className="slider snaps-inline">
        {populars.map((popular) => {
          return (
            <Dish key={popular.id}>
              <Link to={"/Recipe/Detail/" + popular.id}>
                <img src={popular.image} alt="No Image" />
                <div className="overview">
                  <h4>{popular.title}</h4>
                  <p><img src={likes} />{popular.aggregateLikes} like</p>
                  <div style={{display:"flex",alignItems:"center", flexWrap:"wrap"}}>
                    <p><img src={stopwatch}/>{popular.readyInMinutes} minutes</p>{" "}
                    <p><img src={clock}></img>Health Score: {popular.healthScore}</p>
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
  background-color: #F7F7F3;
  padding-inline: 1.25em;
  padding-bottom: 1em;
  width: 100vw;
  h2 {
    padding: 1.5rem;
  }
  .slider {
    margin-inline: 1em;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 30%;
    gap: 1rem;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    padding: 0 .5em 1em .5em;
    ::-webkit-scrollbar{
      height: .5em;
    }
    ::-webkit-scrollbar-track{
      background: #d9d9d9;
      border-radius: 100vw;
      margin-inline: 1em
    }
    ::-webkit-scrollbar-thumb{
      background: var(--primary-color);
      border-radius: 100vw;

    }

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
      grid-auto-columns: 50%;
    }
  }
  @media (width <= 500px) {
    padding-inline: 0;
    .slider {
      grid-auto-columns: 100%;
    }
  }
`;

const Dish = styled.div`
margin-block:.25em;
  max-width: 25em;
  border-radius: 15px;
  display: grid;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25));
  background: #ffffff;
  h4{
    margin: .5em;
  }
  p {
    display: flex;
    align-items: center;
    gap: .5em;
    font-size: 1rem;
    text-align: center;
    font-weight: 600;
    margin-top: 0.6em;
    margin-left: .5em;
  }
  
  img {
    object-fit: cover;
    border-radius: 15px 15px 0 0;
    inline-size: 100%;
    aspect-ratio: 16/7;
  }
  .overview{
    p{
      color: #6F737A;
    }
    img{
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

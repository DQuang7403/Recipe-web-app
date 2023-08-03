import React from "react";
import broccoli from "../assets/Broccoli.png";
import tomato from "../assets/tomato.png";
import sausage from "../assets/sausage.png";

import styled from "styled-components";
import { Link } from "react-router-dom";
export default function nutritionDetail() {
  return (
    <Container>
      <Dish>
        
        <Link to={"/Nutrition/Detail/" + "broccoli"}>
          <div className="imageWrapper">
            <img src={broccoli} alt="Broccoli" />
          </div>
          <Overview>
            <h2>Broccoli (1 pieces)</h2>
            <div className="secondRow">
              <p style={{ fontWeight: "bolder", color: "#32C192" }}>
                206.72 Calories
              </p>
              <div className="nutrient">
                <p className="redOne">40g</p>
                <p className="blueOne">17g</p>
                <p className="yellowOne">2g</p>
              </div>
            </div>
          </Overview>
        </Link>
      </Dish>
      <Dish>
        <Link to={"/Nutrition/Detail/" + "tomato"}>
          <div className="imageWrapper">
            <img src={tomato} alt="tomato" />
          </div>
          <Overview>
            <h2>Tomato (1 pieces)</h2>
            <div className="secondRow">
              <p style={{ fontWeight: "bolder", color: "#32C192" }}>
                22.14 Calories
              </p>
              <div className="nutrient">
                <p className="redOne">5g</p>
                <p className="blueOne">1g</p>
                <p className="yellowOne">0g</p>
              </div>
            </div>
          </Overview>
        </Link>
      </Dish>
      <Dish>
        <Link to={"/Nutrition/Detail/" + "sausage"}>
          <div className="imageWrapper">
            <img src={sausage} alt="sausage" />
          </div>
          <Overview>
            <h2>Sausage (1 pieces)</h2>
            <div className="secondRow">
              <p style={{ fontWeight: "bolder", color: "#32C192" }}>
                258.4 Calories
              </p>
              <div className="nutrient">
                <p className="redOne">0g</p>
                <p className="blueOne">12.8g</p>
                <p className="yellowOne">22g</p>
              </div>
            </div>
          </Overview>
        </Link>
      </Dish>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 2em;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  grid-gap: 3em;
  justify-content: center;
`;
const Dish = styled.div`
  width: clamp(18em, 50vw, 25em);
  border-radius: 15px;
  display: grid;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25));
  background: #ffffff;
  justify-self: center;
  h2 {
    margin: 0.5em;
    @media (width <= 750px) {
      font-size: 16px;
    }
  }
  a {
    color: var(--primary-color);
    text-decoration: none;
  }

  img {
    width: 20px;
    aspect-ratio: 1;
    border-radius: 0;
  }
  .imageWrapper {
    width: clamp(18em, 50vw, 25em);
    aspect-ratio: 16/7;
    background-color: #d9d9d9;
    border-radius: 15px 15px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 40px;
      aspect-ratio: 1;
    }
  }
  @media (width <= 750px) {
    font-size: 14px;
  }
`;
const Overview = styled.div`
  padding-inline: 1.5rem;
  width: 100%;
  p {
    color: #6f737a;
  }
  .secondRow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1em 0.6em;
    p {
      font-size: 1.2rem;
      @media (width <= 750px) {
        font-size: 14px;
      }
    }
  }
  .nutrient {
    display: flex;
    align-items: center;
  }
  .blueOne {
    position: relative;
    padding-left: 20px;
    font-weight: bold;
    color: #3177bb;
  }
  .blueOne::before {
    content: "";
    width: 10px;
    aspect-ratio: 1;
    background-color: #3177bb;
    border: none;
    position: absolute;
    display: block;
    border-radius: 50%;
    top: 25%;
    left: 5px;
  }
  .redOne {
    position: relative;
    padding-left: 20px;
    font-weight: bold;
    color: #f94642;
  }
  .redOne::before {
    content: "";
    width: 10px;
    aspect-ratio: 1;
    background-color: #f94642;
    border: none;
    position: absolute;
    display: block;
    border-radius: 50%;
    top: 25%;
    left: 5px;
  }
  .yellowOne {
    position: relative;
    padding-left: 20px;
    font-weight: bold;
    color: #d57410;
  }
  .yellowOne::before {
    content: "";
    width: 10px;
    aspect-ratio: 1;
    background-color: #d57410;
    border: none;
    position: absolute;
    display: block;
    border-radius: 50%;
    top: 25%;
    left: 5px;
  }
`;

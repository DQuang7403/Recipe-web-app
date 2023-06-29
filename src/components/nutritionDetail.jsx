import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
export default function nutritionDetail() {

  return (
    <div>
      <h1>hello</h1>
      <Dish>
        {/* <Link to={"/Nutrition/Detail/" + input.inform}>
          <div className="overview">
            <h2>{input.inform}</h2>
          </div>
        </Link> */}
      </Dish>
    </div>
  );
}
const Dish = styled.div`
  margin: 2em auto;
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
    font-size: 1rem;
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
    aspect-ratio: 16/6;
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

import React from "react";
import Stats from "../components/stats";
import exploreImg from "../assets/exploreImg.png";
import styled from "styled-components";

import { Link } from "react-router-dom";
export default function explore() {
  return (
    <Container>
      <Stats />
      <ExploreDecription>
        <img src={exploreImg} alt="burger" loading="lazy"/>
        <div className="decription">
          <p>
            Check out our featured recipes section for new and exciting recipe
            ideas, handpicked by our team of food experts.
          </p>
          <Link to="/Recipe">
            <button className="onActionButton">Explore Recipes!</button>
          </Link>
        </div>
      </ExploreDecription>
    </Container>
  );
}
const Container = styled.section`
  position: relative;
  background-color: var(--background-green-color);
  margin-top: 5em;
  padding-bottom: 5em;
  display: flex;
  flex-direction: column;

  .decription {
    margin: 0 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
  } 
`;

const ExploreDecription = styled.div`
  display: flex;
  margin: 0 10%;
  align-items: center;
  
  p {
    font-size: 1.7rem;
    font-weight: bold;
    display: block;
    width: 100%;
  }
  img {
    margin: 1em;
    aspect-ratio: 5/3;
    width: clamp(17em, 40vw, 28em);
    border-radius: 40px;
    margin-bottom: 2em;
  }
  @media (width < 900px) {
    flex-direction: column;
    margin: 0;
  }
`;

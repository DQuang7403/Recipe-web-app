import React from "react";
import pour from "../assets/pour.png";
import spaghetti from "../assets/spaghetti.png";
import grocery from "../assets/grocery-cart.png";
import recipeBook from "../assets/recipe-book.png";
import styled from "styled-components";
export default function Stats() {
  return (
    <StatsStyling>
      <Stat>
        <img src={pour} alt="image" />
        <div className="individualStat">
          <div>Ingredients</div> 2,600+
        </div>
      </Stat>
      <Stat>
        <img src={recipeBook} alt="image" />
        <div className="individualStat">
          <div>Recipes</div> 5,000+
        </div>
      </Stat>
      <Stat>
        <img src={grocery} alt="image" />
        <div className="individualStat">
          <div>Products</div> 600K+
        </div>
      </Stat>
      <Stat>
        <img src={spaghetti} alt="image" loading="lazy" />
        <div className="individualStat">
          <div>Menu Items</div> 115K+
        </div>
      </Stat>
    </StatsStyling>
  );
}
const StatsStyling = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  align-items: center;
  justify-content: space-between;
  margin: 1em 8%;
  transform: translate(0, -50%);
  @media (width < 1080px) {
    transform: translate(0, 0);
    margin: 1em 10%;
    flex-grow: 1;
  }
`;
const Stat = styled.div`
  background-color: var(--light-blue);
  padding: 1em;
  border-radius: 20px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  flex-grow: 1;
  width: clamp(11em, 15vw, 15em);
  img {
    width: min(3.5em, 10vw);
  }
  .individualStat {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    align-items: center;
  }
`;

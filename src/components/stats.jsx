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
  justify-content: space-between;
  align-items: center;
  margin: 1em 10%;
  transform: translate(0, -50%);
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
  gap: 1em;
  width: min(13em, 15vw);
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

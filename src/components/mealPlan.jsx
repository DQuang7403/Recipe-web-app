import React from "react";
import mealPlanImg from "../assets/mealPlanImg.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function MealPlan() {
  return (
    <Wrapper>
      <h1 className="title" style={{ textAlign: "center", fontSize: "2rem" }}>
        Ingredient Nutrition
      </h1>
      <MealPlanSection>
        <MealPlanContainer>
          <div className="mealPlanheading">
            View in-depth <span className="customMealPlanText">nutrition</span>{" "}
            info on millions of foods
          </div>
          <div className="mealPlanSubHeading">
            Understanding ingredient nutrition is key to informed dietary
            choices. Using our ingredient nutrition section for healthier meal
            planning and overall wellness.
          </div>
          <Link to="/MealPlanning">
            <button className="onActionButton">Start now!</button>
          </Link>
        </MealPlanContainer>
        <img src={mealPlanImg} alt="Image" />
      </MealPlanSection>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 5vw;
`;
const MealPlanSection = styled.div`
  display: flex;
  margin: 2em 10%;
  align-items: center;
  justify-content: space-between;
  gap: 15vw;
  img {
    width: max(25vw, 15em);
  }
  @media (width <= 900px) {
    flex-direction: column;
    gap: 2em;
    align-items: center;
  }
`;
const MealPlanContainer = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
  margin: 1em auto;
  flex-direction: column;
  .title {
    margin: 1em 0;
    text-align: center;
    font-size: 2rem;
    color: var(--primary-color);
  }
  .mealPlanheading {
    font-size: 1.5rem;
    font-weight: 550;
  }

  .mealPlanSubHeading {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .customMealPlanText {
    color: var(--background-green-color);
  }
`;

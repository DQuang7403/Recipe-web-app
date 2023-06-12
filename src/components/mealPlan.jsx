import React from "react";
import mealPlanImg from "../assets/mealPlanImg.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function MealPlan() {
  return (
    <>
      <h1 className="title" style={{textAlign:"center", marginTop:'1em'}}>Generate Meal Plan</h1>
      <MealPlanSection>
        <img src={mealPlanImg} alt="Image" />
        <MealPlanContainer>
          <div className="mealPlanheading">
            <span className="customMealPlanText">Generate a meal plan</span>{" "}
            with three meals per day (breakfast, lunch, and dinner)
          </div>
          <div className="mealPlanSubHeading">
            Display the generated meal plan, including recipes for each meal
            category. Emphasize the variety, nutritional balance, and flavors in
            the plan
          </div>
          <Link to="/MealPlanning">
            <button className="onActionButton">Generate Now!</button>
          </Link>
        </MealPlanContainer>
      </MealPlanSection>
    </>
  );
}

const MealPlanSection = styled.div`
  display: flex;
  margin: 1em 10%;
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
    font-size: 2.6rem;
    color: var(--primary-color);
  }
  .mealPlanheading {
    font-size: 2rem;
    font-weight: bold;
  }

  .mealPlanSubHeading {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .customMealPlanText {
    color: var(--background-green-color);
  }
`;

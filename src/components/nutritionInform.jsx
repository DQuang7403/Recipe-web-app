import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
export default function nutritionInform() {
  const [data, setData] = useState({});
  const [nutrients, setNutrients] = useState([]);
  const input = useParams();

  console.log(data);
  useEffect(() => {
    setNutrients(data?.nutrition?.nutrients);
  }, [data]);
  useEffect(() => {
    // const check = localStorage.getItem("data");
    // if (check) {
    //   setData(JSON.parse(check));
    // } else {
    getId(input.id);
    // }
  }, [input.id]);
  const getId = async (input) => {
    try {
      const idRes = await fetch(
        `https://api.spoonacular.com/food/ingredients/search?apiKey=${
          import.meta.env.VITE_API_KEY
        }&query=${input}`
      );
      const id = await idRes.json();
      // console.log(id.results)
      try {
        const getInformations = await fetch(
          `https://api.spoonacular.com/food/ingredients/${
            id.results[0].id
          }/information?apiKey=${import.meta.env.VITE_API_KEY}&amount=1`
        );
        const information = await getInformations.json();
        setData(information);
        localStorage.setItem("data", JSON.stringify(information));
      } catch (err) {
        console.error(err);
      }
    } catch (err) {
      console.error(err);
      
    }

    // console.log(id.results[0].id);
  };
  return (
    <>
      <h1>Nutritional Facts</h1>
      <Table>
        {nutrients?.map((nutrient) => {
          return nutrient.name === "Protein" ? (
            <Row
              style={{
                backgroundColor: "#EFF4FA",
                color: "#3177BB",
                borderRadius: "10px",
              }}
              key={nutrient.name}
            >
              <span>{nutrient.name}</span>
              <span>
                {nutrient.amount} {nutrient.unit}
              </span>
            </Row>
          ) : nutrient.name === "Fat" ? (
            <Row
              style={{
                backgroundColor: "#FFF8EE",
                color: "#D57410",
                borderRadius: "10px",
              }}
              key={nutrient.name}
            >
              <span>{nutrient.name}</span>
              <span>
                {nutrient.amount} {nutrient.unit}
              </span>
            </Row>
          ) : nutrient.name === "Carbohydrates" ? (
            <Row
              style={{
                backgroundColor: "#FFF0F0",
                color: "#F94642",
                borderRadius: "10px",
              }}
              key={nutrient.name}
            >
              <span>{nutrient.name}</span>
              <span>
                {nutrient.amount} {nutrient.unit}
              </span>
            </Row>
          ) : nutrient.name === "Calories" ? (
            <Row
              style={{
                backgroundColor: "#E6F4F1",
                color: "#32C192",
                borderRadius: "10px",
              }}
              key={nutrient.name}
            >
              <span>{nutrient.name}</span>
              <span>
                {nutrient.amount} {nutrient.unit}
              </span>
            </Row>
          ) : (
            <Row style={{ marginInline: "1rem" }} key={nutrient.name}>
              <span>{nutrient.name}</span>
              <span>
                {nutrient.amount} {nutrient.unit}
              </span>
            </Row>
          );
        })}
      </Table>
    </>
  );
}
const Table = styled.section`
  border: 1px solid #8b8b8b;
  border-radius: 37px;
  width: 80vw;
  margin: 2rem auto;
  padding: 2em;
  @media (width <= 1024px) {
    padding: 1rem;
    margin: 2rem 0;
  }
`;
const Row = styled.div`
  display: flex;
  color: #6f7e9c;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem;
  margin: 0.7rem;
  font-weight: bold;
  font-size: 1.5rem;
  @media (width <= 1024px) {
    font-size: .9rem;
    margin: 0.3rem;
    padding: .7rem;
  }
  @media (width <= 500px) {
    font-size: 12px;
    margin: 0.3rem;
    padding: .7rem;
  }
`;


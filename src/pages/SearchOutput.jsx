import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function SearchOutput() {
  const [returnedData, setReturnedData] = useState([]);
  const input = useParams();
  const getSearch = async (name) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=10&query=${name}`
    );
    const data = await response.json();
    setReturnedData(data.results);
  };
  useEffect(() => {
    getSearch(input.search);
  }, [input.search]);
  return (
    <Grid>
      {returnedData.map((returned) => {
        return (
          <div key={returned.id}>
            <Link to={"/Recipe/Detail/" + returned.id}>
              <img src={returned.image} />
              <h4>{returned.title}</h4>
            </Link>
          </div>
        );
      })}
    </Grid>
  );
}
const Grid = styled.div`
  margin-top: 2em;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3em;
  img {
    width: 100%;
    border-radius: 12px;
  }
  h4 {
    text-align: center;
    padding-top: 1em;
  }
  a{
    color: var(--primary-color);
    text-decoration: none;
  }
`;
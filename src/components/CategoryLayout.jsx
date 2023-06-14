import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";
import SearchInput from "./SearchInput";
export default function CategoryLayout() {
  // const [activeCategory, setActiveCategory] = useState("Trending");
  return (
    <Container>
      <h1 style={{textAlign:"center", marginTop:"1.3em"}}>Check out our featured recipes section</h1>
      <SearchInput />
      <Wrapper>
        <NavLink
          to=""
          // className={({ isActive, isPending }) =>
          //   isPending ? "pending" : isActive ? "active" : ""
          // }
        >
          <Card>
            <h4>Trending</h4>
          </Card>
        </NavLink>
        <NavLink to="Italian">
          <Card>
            <h4>Italian</h4>
          </Card>
        </NavLink>
        <NavLink to="Mexican">
          <Card>
            <h4>Mexican</h4>
          </Card>
        </NavLink>
        <NavLink to="Asian">
          <Card>
            <h4>Asian</h4>
          </Card>
        </NavLink>
      </Wrapper>
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  gap: 2em;
  
`;
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  margin: 0 auto;
`;
const Card = styled.button`
  background-color: #d9d9d9;
  font-size: 0.9rem;
  padding: 0.4em 1.2em;
  border: none;
  border-radius: 11px;
  cursor: pointer;
  :hover {
    background-color: #c0c0c0;
  }
  a.active {
    background-color: var(--primary-color);
    color: white;
  }
`;

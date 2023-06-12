import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import searchIcon from '../assets/magnifying-glass.png'
export default function SearchInput() {
  const [Search, setSearch] = useState("")
  const navigate = useNavigate();
  const submitHandler = (e) =>{
    e.preventDefault();
    navigate("/recipe/search/" + Search)
    console.log(Search)
  }
  return (
    <>
      <form onSubmit={submitHandler} style={{display:"flex"}}>
        <StyledSearch placeholder='Search' onChange={(e) => {setSearch(e.target.value)}} type="text" name="search" id="search" />
        <ButtonStyle type="submit"><img src={searchIcon} style={{width:"3em"}} /></ButtonStyle>
      </form>
    </>
  )
}
const StyledSearch = styled.input`
  width: max(35vw, 20em);
  padding: .6em .5em;
  border-radius: 12px;
  margin-right: .8em;
  font-size: 1.2rem;
  background-color: #D9D9D9;
  border: 0;
`
const ButtonStyle = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 2px solid var(--primary-color);
  cursor:  pointer;
`
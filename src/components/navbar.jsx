// import "./styles.css"
// import {Link} from "react-router-dom"
import logoPage from "../assets/logoPage.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hamburger from "../assets/hamburger.png";
import close from "../assets/fork.png";
import { useRef, useEffect } from "react";
export default function Navbar() {
  const openNav = useRef(null);
  const closeNav = useRef(null);
  const nav = useRef(null);
  const buttonClicked = (e) => {
    const Nav = nav.current;
    const openButton = openNav.current;
    const closeButton = closeNav.current;
    // console.log(closeButton.getAttribute('data-active'));
    if (Nav.getAttribute("data-visible") === "true") {
      closeButton.setAttribute("data-active", "true");
      openButton.setAttribute("data-active", "false");
      Nav.setAttribute("data-visible", "false");
    } else {
      closeButton.setAttribute("data-active", "false");
      openButton.setAttribute("data-active", "true");
      Nav.setAttribute("data-visible", "true");
    }
  };
  return (
    <Container>
      <nav>
        <img className="logo" src={logoPage} />
        <button
          onClick={buttonClicked}
          aria-controls="navLinks"
          aria-expanded="false"
          data-status="open"
          className="active"
        >
          <img ref={openNav} src={close} alt="x" data-active="false" />
          <img ref={closeNav} src={hamburger} alt="+" data-active="true" />
        </button>
        <ul ref={nav} id="navLinks" data-visible="false">
          <Link to="/">
            <li className="navLink">Home</li>
          </Link>
          <Link to="/Recipe">
            <li className="navLink">Recipes</li>
          </Link>
          <Link to="/Nutrition">
            <li className="navLink">Nutrition</li>
          </Link>
          <Link to="/About">
            <li className="aboutBtn">About</li>
          </Link>
        </ul>
      </nav>
      <div className="spacer"></div>
    </Container>
  );
}
const Container = styled.div`
  .logo {
    width: 12em;
  }
  
  #navLinks {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .navLink {
    list-style: none;
    cursor: pointer;
    font-weight: bold;
  }
  button {
    display: none;
  }
  a {
    text-decoration: none;
    color: inherit;
    font-size: clamp(0.8rem, 9vw, 1.2rem);
  }
  .aboutBtn {
    background-color: var(--btn-color);
    color: var(--primary-color);
    padding: 0.3em 0.6em;
    border-radius: 15px;
    border: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav {
    background-color: var(--primary-color);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 0.5em 4vw;
  }
  @media (max-width: 700px) {
    #navLinks {
      position: fixed;
      z-index: 1000;
      inset: 0 0 0 20%;
      background: var(--primary-color);
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: min(30vh, 10rem) 2em;
      gap: 0;
      transition: transform 350ms ease-in;
      
    }
    #navLinks[data-visible="false"]{
      transform: translateX(100%);
    }
    #navLinks[data-visible="true"] {
      transform: translateX(0%);
    }
    a {
      gap: 0;
      width: 100%;
      border-top: 1px solid grey;
      padding: clamp(1em, 8vw, 1.5em);
      position: relative;
      a:last-child {
        border-bottom: 1px solid grey;
      }
    }
    button {
      z-index: 9999;
      display: block;
      border: none;
      cursor: pointer;
      width: 40px;
      aspect-ratio: 1;
      position: absolute;
      top: 0.9em;
      right: 5%;
      background: transparent;
      transition: smooth;
      img {
        width: 40px;
        position: absolute;
        transform: translate(0, -50%);
        display: none;
      }
      img[data-active="true"] {
        display: block;
      }
    }
  }
`;

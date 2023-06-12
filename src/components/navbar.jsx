// import "./styles.css"
// import {Link} from "react-router-dom"
import logoPage from "../assets/logoPage.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Navbar() {
  return (
    <Container>
      <nav>
        <img className="logo" src={logoPage} />
        <ul className="navLinks">
          <li className="navLink">
            <Link to="/">Home</Link>
          </li>
          <li className="navLink">
            <Link to="/Recipe">Recipes</Link>
          </li>
          <li className="navLink">
            <Link to="/MealPlanning">Meal Planning</Link>
          </li>
          <li className="navLink aboutBtn">
            <Link to="/About">About</Link>
          </li>
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
  nav {
    background-color: var(--primary-color);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 0.5em 4vw;
  }
  nav .navLinks {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4em;
    font-size: 1.1rem;
  }
  nav .navLinks .navLink {
    list-style: none;
    cursor: pointer;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .navLink:hover {
    border-bottom: 2px solid white;
  }
  .aboutBtn {
    background-color: var(--btn-color);
    color: var(--primary-color);
    padding: 0.3em 0.6em;
    border-radius: 15px;
    border: none;
    font-weight: bold;
  }
`;

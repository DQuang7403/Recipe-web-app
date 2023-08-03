import heroImgage from "../assets/HeroImage.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Hero() {
  return (
    <HeroSection>
      <LeftHeroSection>
        <div className="heroTitle">
          <span className="customText">Cook Up</span> Your Passion
        </div>
        <div className="Tagline">Delicious recipes at your fingertips</div>
        <div className="heroDecription">
          Check out our featured recipes section for new and exciting recipe
          ideas, handpicked by our team of food experts.
        </div>
        <Link to="/Recipe">
          <button className="onActionButton">Cooking Now!</button>
        </Link>
      </LeftHeroSection>
      <img src={heroImgage} alt="" />
    </HeroSection>
  );
}
const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2em;
  .heroTitle {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 0.7rem;
  }
  .customText {
    color: var(--light-blue);
  }
  .Tagline {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5em;
  }
  .heroDecription {
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom: 1.5em;
  }

  img {
    width: min(40em, 50vw);
    position: relative;
    transform: translate(17%, 0);
  }
  @media (width <= 750px) {
    justify-content: center;
    align-items: center;
    margin-left: 1em;
    img {
      display: none;
    }
    
  }
  @media (width <= 500px) {
    .heroTitle {
      font-size: 2.5rem;
    }
    .Tagline {
      font-size: 1.7rem;
      margin-bottom: 1.2em;
    }
    .heroDecription {
      font-size: 1rem;
    }
    margin: 1em;
  }
`;
const LeftHeroSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3em;
  margin-top: 3em;
  max-width: 34em;
  align-items: flex-start;

  @media (width <= 1024px) {
    margin-left: 2em;
  }
  @media (width <= 750px) {
    margin-left: 0em;
  }
`;

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
    transform: translate(5em, 0);
  }
  @media (width <= 700px) {
    img{
      display: none;
    }
  }
`;
const LeftHeroSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8vw;
  margin-top: 3em;
  max-width: 34em;
  align-items: flex-start;
`;

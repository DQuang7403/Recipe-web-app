import React from "react";
import logoPage from "../assets/logoPage.png";
import facebook from "../assets/facebookIcon.svg";
import insta from "../assets/instagramIcon.svg";
import twitter from "../assets/TwiterIcon.svg";
import Ln from "../assets/LnIcon.svg";
import styled from "styled-components";
export default function SubFooter() {
  return (
    <Container>
      <div className="iconAndContact">
        <img src={logoPage} alt="Dish delight" />
        <h3>The ultimate destination for food enthusiasts!</h3>
        <div className="socialMedia">
          <img src={facebook} alt="facebook" />
          <img src={insta} alt="instagram" />
          <img src={twitter} alt="twitter" />
          <img src={Ln} alt="linkin" />
        </div>
      </div>
      <Links>
        <div className="Link Company">
          <h2>Company</h2>
          <p>About</p>
          <p>Contact us</p>
          <p>Support</p>
        </div>
        <div className="Link QuickLink">
          <h2>Quick Link</h2>
          <p>Share Location</p>
          <p>Food Guide</p>
          <p>FAQs</p>
        </div>
        <div className="Link Legal">
          <h2>Legal</h2>
          <p>Terms & conditions</p>
          <p>Privacy Policy</p>
          <p>DMCA</p>
        </div>
      </Links>
    </Container>
  );
}
const Container = styled.section`
  background-color: var(--primary-color);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 3em 0;
  @media (width <= 1000px) {
    align-items: center;
    flex-direction: column;
  }
  .iconAndContact {
    max-width: 20em;
  }
  .iconAndContact > img {
    margin-bottom: 1em;
  }
  .socialMedia {
    display: flex;
    align-items: center;
    gap: 1.5em;
    margin-top: 2em;
  }
  .socialMedia > img {
    cursor: pointer;
  }
  
`;
const Links = styled.div`
  display: flex;
  margin-top : 1.5em;
  align-items: center;
  justify-content: space-between;
  gap :2em;
  .Link {
    display: flex;
    flex-direction: column;
    gap: 1em;
    color: #8e8e8e;
    h2 {
      color: #d9d9d9;
      font-weight: lighter;
      font-size: clamp(1rem, 8vw, 1.2rem);
    }
    p {
      width: 100%;
      font-size: clamp(1rem, 8vw, 1rem);
      cursor: pointer;
    }
  }
`

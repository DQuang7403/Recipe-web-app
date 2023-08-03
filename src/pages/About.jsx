import React from "react";
import styled from "styled-components";
export default function About() {
  return (
    <AboutSection>
      <h1>About Us</h1>
      <p>Welcome to Dish Delight, your ultimate culinary destination! We are passionate about bringing the joy of cooking and the delight of delicious meals into your kitchen</p>
      <p>At Dish Delight, we believe that cooking should be accessible, enjoyable, and inspiring for everyone, from seasoned chefs to cooking novices. Our mission is to provide a diverse collection of mouthwatering recipes, practical cooking tips, and creative culinary ideas that cater to a variety of tastes and dietary preferences.</p>
      <p>Whether you're looking for quick and easy weeknight dinners, impressive dishes to impress your guests, or indulgent desserts to satisfy your sweet tooth, our extensive recipe library has you covered. Our team of experienced chefs and food enthusiasts work tirelessly to curate and develop recipes that are both approachable and delectable.</p>
      <p>We understand the importance of quality ingredients, seasonal flavors, and mindful cooking. That's why our recipes emphasize fresh, locally sourced ingredients whenever possible. We also provide detailed nutritional information to help you make informed choices that align with your dietary needs.</p>
      <p>But Dish Delight is more than just a recipe website; it's a vibrant community of food lovers who share a common passion for all things culinary. Join our community to connect with like-minded individuals, exchange cooking tips and tricks, and discover the endless possibilities of the culinary world. </p>
      <p>Thank you for visiting Dish Delight. We invite you to explore our recipes, experiment with new flavors, and embark on an exciting culinary journey with us. Happy cooking!"</p>
    </AboutSection>
  );
}
const AboutSection = styled.section`
  margin: 2em 15vw;
  h1{
    text-align: center;
    margin-block: 50px;
    font-size: 3rem;
    color: var(--light-blue);
  }
  p{
    font-size: 1.3rem;
    text-indent: .8em;
    line-height: 1.2;
    margin-bottom: .9em;
    font-weight: 600;
    text-align: justify;
  }
  @media (width <= 750px) {
    margin: 2em 5vw;
  }
`

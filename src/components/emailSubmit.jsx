import React, { useEffect, useState } from "react";
import styled from "styled-components";
export default function EmailSubmit() {
  const [email, setEmail] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    console.log(email);
    if (email === "") return;
    setEmail("");
  }
  useEffect(() => {
    if (localStorage.getItem("email") == null) return;
    else {
      localStorage.setItem("email", JSON.stringify(email));
    }
  }, []);

  return (
    <Form>
      <p>
        Stay up-to-date with our newest recipes and expert culinary tips
        delivered directly to your inbox.
      </p>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="mail"
          placeholder="Add your email here"
        />
        <button type="submit">SEND</button>
      </form>
    </Form>
  );
}
const Form = styled.section`
  background-color: var(--background-green-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  padding: 2em ;
  p {
    max-width: 35em;
    text-align: center;
    font-size: clamp(1rem, 10vw, 1.5em);
    margin: 1.5em 1em;
    font-weight: bold; 
  }
  form {
    background-color: white;
    padding: 0.7em;
    border-radius: 10px;
  }
  input {
    width: clamp(10em, 20vw, 20em);
    border: none;
    height: 1.2em;
    outline: none;
    font-size: clamp(1.2rem,5vw, 1.5rem);
  }
  button {
    padding: clamp(.2em, 2vw, 0.6em) clamp(.5em, 4vw, .9em);
    background-color: var(--primary-color);
    color: white;
    font-weight: bold;
    border: none;
    font-size: clamp(.9rem,2vw,1.2rem);
    border-radius: 8px;
    cursor: pointer;
  }
`;

import React, { useEffect, useState } from "react";

export default function EmailSubmit() {
  const [email, setEmail] = useState("");
  function submitHandler(e){
    e.preventDefault();
    console.log(email);
    if (email === "") return;
    setEmail("")
  }
  useEffect(()=>{
  if(localStorage.getItem("email") == null) return;
  else{
    localStorage.setItem("email", JSON.stringify(email));
  }
  },[])
  
  
  return (
    <section className="emailSubmit">
      <h1>
        Stay up-to-date with our newest recipes and expert culinary tips
        delivered directly to your inbox.
      </h1>
      <form onSubmit={submitHandler}>
        <input type="email" onChange={(e) =>{setEmail(e.target.value)}} id="mail" placeholder="Add your email here" />
        <button type="submit">SEND</button>
      </form>
    </section>
  );
}

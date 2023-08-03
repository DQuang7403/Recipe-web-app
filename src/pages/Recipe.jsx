import React, { useEffect, useState } from "react";
import Trending from "../components/trending";
import styled from "styled-components";
import Dessert from "../components/Dessert";

export default function Recipe() {
  return (
    <section >
      <Trending />
      <Dessert />
    </section>
  );
}

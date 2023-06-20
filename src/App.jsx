import "./App.css";
import { Routes, Route } from "react-router-dom";
//import component
import Navbar from "./components/navbar";
import CategoryLayout from "./components/CategoryLayout";
import Cuisine from "./components/Cuisine";

//import pages

import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Nutrition from "./pages/Nutrition";
import About from "./pages/About";

//import different components to the pages
// +) recipes pages
import RecipeDetail from "./pages/RecipeDetail";
import SearchOutput from "./pages/SearchOutput";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Recipe" element={<CategoryLayout />}>
          <Route index element={<Recipe />} />
          <Route path=":type" element={<Cuisine />}></Route>
          <Route path="Detail/:id" element={<RecipeDetail />}></Route>
          <Route path="Search/:search" element={<SearchOutput />}></Route>
        </Route>
        <Route path="/Nutrition" element={<Nutrition />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;

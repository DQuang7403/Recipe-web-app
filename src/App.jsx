import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import MealPlanning from "./pages/mealPlanning";
import About from "./pages/About";
import CategoryLayout from "./components/CategoryLayout";
import { Routes, Route } from "react-router-dom";
import Cuisine from "./components/Cuisine";
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
        <Route path="/MealPlanning" element={<MealPlanning />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;

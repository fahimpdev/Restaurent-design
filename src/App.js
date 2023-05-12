import React from "react";
import Nav from "./Components/Nav/Nav";
import "./App.css";
import Container from "./Components/Container";
import Home from "./Components/Home/Home";
import Order from "./Components/Section2/Order";
import Oursite from "./Components/Section3/Oursite";
import Customer from "./Components/Section5/Customer";
import Visit from "./Components/Section6/Visit";
import Footer from "./Components/Footer/Footer";
import RecipesA from "./Components/Section4/RecipesA";
import RecipesB from "./Components/Section4/RecipesB";

export default function App() {
  return (
    <div>
      <div className="background">
        <Container>
          <Nav />
          <Home />
        </Container>
      </div>
      <Container>
        <div>
          <Order />
        </div>
      </Container>
      <div className="bg-[#f3f3f3]">
        <Container>
          <Oursite />
        </Container>
      </div>
      <div className="recipesAbg ">
        <RecipesA />
      </div>
      <div className="recipesBbg">
        <RecipesB />
      </div>
      <div className="bg-[#f3f3f3]">
        <Container>
          <Customer />
        </Container>
      </div>
      <div className="bg-[#333333]">
        <Container>
          <Visit />
        </Container>
      </div>
      <div className="bg-[#282828]">
        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
}

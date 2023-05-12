import React from "react";
import Nav from "./Components/Nav/Nav";
import "./App.css";
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
      <Nav />
      <Order />
      <Oursite />
      <RecipesA />
      <RecipesB />
      <Customer />
      <Visit />
      <Footer />
    </div>
  );
}

import React from "react";
import Hero from "../../components/Hero";
import Categories from "./Categories";
import Details from "./Details";
import Poster from "./Poster";
import Content from "./Content";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Details />
      <Poster />
      <Content />
    </div>
  );
};

export default Home;

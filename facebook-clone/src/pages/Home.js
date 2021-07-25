import React from "react";
import Article from "../components/Article";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Article article="Premier article" key="1" />
      <Article article="Deuxieme article" key="2" />
      <h1>HELLO</h1>
    </div>
  );
};

export default Home;

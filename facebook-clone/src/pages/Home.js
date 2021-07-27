import React from "react";
import Header from "../components/Header";
import WidgetLeft from "../components/WidgetLeft";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="content">
        <WidgetLeft />
      </div>
    </div>
  );
};

export default Home;

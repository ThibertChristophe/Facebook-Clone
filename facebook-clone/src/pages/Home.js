import React from "react";
import Header from "../components/Header";
import WidgetLeft from "../components/WidgetLeft";
import WidgetMiddle from "../components/WidgetMiddle";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="content">
        <WidgetLeft />
        <WidgetMiddle />
      </div>
    </div>
  );
};

export default Home;

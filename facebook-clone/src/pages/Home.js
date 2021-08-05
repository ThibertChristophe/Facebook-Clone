import React from "react";
import Header from "../components/Header";
import PopUp from "../components/PopUp";
import WidgetLeft from "../components/WidgetLeft";
import WidgetMiddle from "../components/WidgetMiddle";
import WidgetRight from "../components/WidgetRight";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="content">
        <WidgetLeft />
        <WidgetMiddle />
        <WidgetRight />
      </div>
    </div>
  );
};

export default Home;

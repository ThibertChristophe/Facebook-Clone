import React from "react";
import Header from "../components/Header";
import WidgetLeft from "../components/WidgetLeft";
import WidgetMiddle from "../components/WidgetMiddle";
import WidgetRight from "../components/WidgetRight";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="content">
        <div className="content-sticky">
          <WidgetLeft />
        </div>
        <div className="content-middle">
          <WidgetMiddle />
        </div>
        <div className="content-sticky">
          <WidgetRight />
        </div>
      </div>
    </div>
  );
};

export default Home;

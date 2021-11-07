import React from "react";
import WidgetLeft from "../components/WidgetLeft";
import WidgetMiddle from "../components/WidgetMiddle";
import WidgetRight from "../components/WidgetRight";

const Accueil = () => {
  return (
    <div className="accueil">
      <div className="content-sticky content-left">
        <WidgetLeft />
      </div>
      <div className="content-middle">
        <WidgetMiddle />
      </div>
      <div className="content-sticky content-right">
        <WidgetRight />
      </div>
    </div>
  );
};

export default Accueil;

import React from "react";
import Posts from "./Posts";
import Saloons from "./Saloons";
import Stories from "./Stories";
import WhatNew from "./WhatNew";

const WidgetMiddle = () => {
  return (
    <div className="widget-middle">
      {/* Stories */}
      <div className="widget-middle__stories">
        <Stories />
      </div>

      {/* What news  */}
      <WhatNew />
      {/* Salon */}
      <Saloons />
      {/* Fil */}
      <Posts titre="Post 1" />
      <Posts titre="Post 2" />
      <Posts titre="Post 3" />
      <Posts titre="Post 4" />
    </div>
  );
};

export default WidgetMiddle;

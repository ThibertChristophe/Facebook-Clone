import React from "react";
import HeaderMiddleWidget from "./HeaderMiddleWidget";
import Saloons from "./Saloons";
import Stories from "./Stories";
import WhatNew from "./WhatNew";

const WidgetMiddle = () => {
  return (
    <div className="widget-middle">
      <HeaderMiddleWidget />
      {/* Stories */}
      <Stories />
      {/* What news  */}
      <WhatNew />
      {/* Salon */}
      <Saloons />
      {/* Fil */}
    </div>
  );
};

export default WidgetMiddle;

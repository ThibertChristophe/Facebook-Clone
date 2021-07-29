import React from "react";
import HeaderMiddleWidget from "./HeaderMiddleWidget";
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

      {/* Fil */}
    </div>
  );
};

export default WidgetMiddle;

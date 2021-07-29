import React, { useState } from "react";

const HeaderMiddleWidget = () => {
  const [cache, setCache] = useState("headerMiddleWidget");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 20) {
      setCache("headerMiddleWidget cache");
    } else {
      setCache("headerMiddleWidget");
    }
  });

  return (
    <div className={cache}>
      <div className="headerMiddleWidget-menu">
        <a className="headerMiddleWidget-menu-btn active">Accueil</a>
        <a className="headerMiddleWidget-menu-btn">Favoris</a>
        <a className="headerMiddleWidget-menu-btn">Récent</a>
      </div>
      <div className="headerMiddleWidget-option">
        <button className="option"></button>
      </div>
    </div>
  );
};

export default HeaderMiddleWidget;

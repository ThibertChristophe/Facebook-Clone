import React from "react";

const HeaderMiddleWidget = () => {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 20) {
      document.querySelector(".headerMiddleWidget").classList.add("cache");
    } else {
      document.querySelector(".headerMiddleWidget").classList.remove("cache");
    }
  });

  return (
    <div className="headerMiddleWidget">
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

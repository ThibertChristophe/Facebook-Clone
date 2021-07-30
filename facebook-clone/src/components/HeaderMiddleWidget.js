import React from "react";
import imgOption from "../img/option.svg";

const HeaderMiddleWidget = () => {
  return (
    <div className="headerMiddleWidget">
      <div className="headerMiddleWidget-menu">
        <a className="headerMiddleWidget-menu-btn active">Accueil</a>
        <a className="headerMiddleWidget-menu-btn">Favoris</a>
        <a className="headerMiddleWidget-menu-btn">Récent</a>
      </div>
      <div className="headerMiddleWidget-option">
        <button className="option">
          <img src={imgOption} alt="" />
        </button>
      </div>
    </div>
  );
};

export default HeaderMiddleWidget;

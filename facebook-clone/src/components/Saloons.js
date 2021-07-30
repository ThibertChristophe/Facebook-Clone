import React from "react";
import Button_circle from "./Button_circle";
import imgArrow from "../img/right-arrow.svg";
const Saloons = () => {
  return (
    <div className="saloons">
      <div className="createSaloon">
        <button>Créer un salon</button>
      </div>
      <div className="listContact">
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
      </div>
      <div className="saloons-btn-next">
        <Button_circle Icon={imgArrow} />
      </div>
    </div>
  );
};

export default Saloons;

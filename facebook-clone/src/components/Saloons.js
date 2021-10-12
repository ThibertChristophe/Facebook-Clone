import React, { useEffect } from "react";
import Button_circle from "./Button_circle";
import imgArrow from "../img/next.svg";

const Saloons = () => {
  function defillement() {
    const listDeContact = document.querySelectorAll(".listContact > .img");
    const totalPixel = (40 * listDeContact.length) / 2 + 10;
    document.querySelector(".listContact").style.left = -totalPixel + "px";
    document.querySelector(".saloons-btn-next").classList.toggle("hide");
    document.querySelector(".saloons-btn-previous").classList.toggle("show");
  }

  function previous() {
    document.querySelector(".listContact").style.left = "10px";
    document.querySelector(".saloons-btn-next").classList.toggle("hide");
    document.querySelector(".saloons-btn-previous").classList.toggle("show");
  }

  return (
    <div className="saloons">
      <div className="saloons-btn-previous" onClick={previous}>
        <Button_circle Icon={imgArrow} withoutOver="true" renverse />
      </div>
      <div className="listContact">
        <div className="createSaloon">
          <button>
            <span className="camera"></span>Créer un salon
          </button>
        </div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        {/* depasse*/}
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
      </div>
      <div className="saloons-btn-next" onClick={defillement}>
        <Button_circle Icon={imgArrow} withoutOver="true" />
      </div>
    </div>
  );
};

export default Saloons;

import React, { useEffect, useState } from "react";
import Button_circle from "./Button_circle";
import imgArrow from "../img/next.svg";

const Saloons = () => {
  const [btnNext, setBtnNext] = useState("");

  useEffect(() => {
    // On définit le left pour que l'effet s'applique aussi au 1er click
    document.querySelector(".listContact").style.left = "10px";
    const listDeContact = document.querySelectorAll(".listContact > .img");
    // On affiche ou non le bouton next en fonction du nombre de contact dans la liste
    if (listDeContact.length > 8) {
      setBtnNext(
        <div className="saloons-btn-next" onClick={defillement}>
          <Button_circle Icon={imgArrow} withoutOver="true" />
        </div>
      );
    }
  }, []);

  /**
   * On défile les contacts vers la gauche lors du click
   */
  function defillement() {
    const listDeContact = document.querySelectorAll(".listContact > .img");
    const totalPixel = 45 * (listDeContact.length - 8);
    if (listDeContact.length > 8) {
      document.querySelector(".listContact").style.left = -totalPixel + "px";
    }
    document.querySelector(".saloons-btn-next").classList.toggle("hide");
    document.querySelector(".saloons-btn-previous").classList.toggle("show");
  }

  /**
   * On remet en place les contacts
   */
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
      </div>
      {btnNext}
    </div>
  );
};

export default Saloons;

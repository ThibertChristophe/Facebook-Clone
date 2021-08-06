import React, { useState } from "react";
import PopUp from "./PopUp";

const Button_circle = (props) => {
  const [actif, setACtif] = useState("");
  const [pop, setPop] = useState("");

  /**
   * Ouvre ou ferme la popup de menu
   */
  function openMenu() {
    // Cas du bouton add
    if (props.type === "add") {
      // Ici on va retirer la popup
      if (actif !== "") {
        // Met le bouton en inactif (CSS)
        setACtif("");
        // Si bouton devant afficher un popup
        setPop("");
      } else {
        // Met le bouton en actif (CSS)
        setACtif("active-btn-cirle");
        // Fait apparaitre la popup "menu"
        // Si bouton devant afficher un popup
        setPop(() => {
          return (
            <div className="btn-circle-popup">
              <PopUp title="Créer" content="menu" />
            </div>
          );
        });
      }
    }
  }

  return (
    <div className="button_circle">
      <button onClick={openMenu} className={actif}>
        <img src={props.Icon} alt="" />
      </button>
      {pop}
    </div>
  );
};

export default Button_circle;

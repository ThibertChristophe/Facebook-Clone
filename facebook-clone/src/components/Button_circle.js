import React, { useState } from "react";
import PopUp from "./PopUp";

const Button_circle = (props) => {
  const [actif, setACtif] = useState("");

  // Ouvre la popup de menu
  function openMenu() {
    if (props.add !== undefined) {
      if (actif !== "") {
        if (props.wPopup !== undefined) {
          displayPopup(false);
        }
        setACtif("");
      } else {
        // Fait apparaitre la popup "menu"
        if (props.wPopup !== undefined) {
          displayPopup(true);
        }
        setACtif("active-btn-cirle");
      }
    }
  }

  function displayPopup(param) {
    const btn = document.querySelector(".button_circle");
    if (param) {
      const divPopup = document.createElement("div");
      divPopup.className = "btn-circle-popup";
      btn.appendChild(divPopup);
    } else {
      btn.removeChild(document.querySelector(".btn-circle-popup"));
    }
  }

  return (
    <div className="button_circle">
      <button onClick={openMenu} className={actif}>
        <img src={props.Icon} alt="" />
      </button>
    </div>
  );
};

export default Button_circle;

import React, { useState } from "react";

const Button_circle = (Icon) => {
  const [actif, setACtif] = useState("");

  // Ouvre la popup de menu
  function openMenu() {
    if (Icon.add !== undefined) {
      document.querySelector(".popup").classList.toggle("showMenu");
      if (actif !== "") {
        setACtif("");
      } else {
        setACtif("active-btn-cirle");
      }
    }
  }
  return (
    <div className="button_circle">
      <button onClick={openMenu} className={actif}>
        <img src={Icon.Icon} alt="" />
      </button>
    </div>
  );
};

export default Button_circle;

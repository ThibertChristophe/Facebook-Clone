import React from "react";

const Button_circle = (Icon) => {
  // Ouvre la popup de menu
  function openMenu1() {
    if (Icon.add !== undefined) {
      document.querySelector(".popup").classList.toggle("showMenu");
    }
  }
  return (
    <div className="button_circle">
      <button onClick={openMenu1}>
        <img src={Icon.Icon} alt="" />
      </button>
    </div>
  );
};

export default Button_circle;

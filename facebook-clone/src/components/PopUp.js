import React from "react";
import PopUpMenu from "./PopUpMenu";
import PopUpMessenger from "./PopUpMessenger";
import ButtonTransparent from "./ButtonTransparent";
import PopUpNotif from "./PopUpNotif";

const PopUp = ({ content, title, children }) => {
  function displayBtn() {
    switch (content) {
      case "messenger":
        return (
          <div className="popup-header-btn-list">
            <ButtonTransparent class="dot" />
            <ButtonTransparent class="camera" />
            <ButtonTransparent class="loupe" />
          </div>
        );
      default:
        return;
    }
  }

  return (
    <div className="popup">
      <div className="popup-header">
        <h1>{title}</h1>
        {displayBtn()}
      </div>
      {children}
    </div>
  );
};

export default PopUp;

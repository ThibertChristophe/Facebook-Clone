import React from "react";
import PopUpMenu from "./PopUpMenu";
import PopUpMessenger from "./PopUpMessenger";
import ButtonTransparent from "./ButtonTransparent";

const PopUp = (props) => {
  /**
   * Affiche le bon popup
   * @returns good content popup
   */
  function displayContent() {
    switch (props.content) {
      case "menu":
        return <PopUpMenu />;
      case "messenger":
        return <PopUpMessenger />;
      case "notif":
        return;
      case "compte":
        return;
      default:
        return;
    }
  }

  function displayBtn() {
    return (
      <div className="popup-header-btn-list">
        <ButtonTransparent class="dot" />
        <ButtonTransparent class="camera" />
        <ButtonTransparent class="loupe" />
      </div>
    );
  }

  return (
    <div className="popup">
      <div className="popup-header">
        <h1>{props.title}</h1>
        {displayBtn()}
      </div>
      {displayContent()}
    </div>
  );
};

export default PopUp;

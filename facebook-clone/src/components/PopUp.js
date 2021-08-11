import React from "react";
import ButtonTransparent from "./ButtonTransparent";

/**
 * Container de popup
 * @param {*} param0
 * @returns
 */
const PopUp = ({ content, title, children }) => {
  /**
   * Affiche les boutons du header de la popup en fonction du contenu
   * @returns component ButtonTransparent
   */
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
      case "notif":
        return (
          <div className="popup-header-btn-list">
            <ButtonTransparent class="dot" />
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
      {/* Children de la props = contenu dans les balises de la props*/}
      {children}
    </div>
  );
};

export default PopUp;

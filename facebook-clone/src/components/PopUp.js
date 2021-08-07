import React from "react";
import PopUpMenu from "./PopUpMenu";
import PopUpMessenger from "./PopUpMessenger";

const PopUp = (props) => {
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

  return (
    <div className="popup">
      <div className="popup-header">
        <h1>{props.title}</h1>
      </div>
      {displayContent()}
    </div>
  );
};

export default PopUp;

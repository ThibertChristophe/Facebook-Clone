import React from "react";
import PopUpMenu from "./PopUpMenu";

const PopUp = (props) => {
  function displayContent() {
    switch (props.content) {
      case "menu":
        return <PopUpMenu />;
      case "messenger":
        return;
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
      <h1>{props.title}</h1>
      {displayContent()}
    </div>
  );
};

export default PopUp;

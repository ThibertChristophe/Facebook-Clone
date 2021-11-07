import React from "react";

const WidgetButton = (props) => {
  function btnNext() {
    if (props.next !== undefined) {
      return <div className="voirPlus"></div>;
    } else {
      return <img src={props.img} alt="" />;
    }
  }

  function displayNotif() {
    // Si on a une notif
    if (props.notif !== undefined) {
      return <div className="notif-blue">{props.notif}</div>;
    }
  }

  function handleClick() {
    // Si on a cliquer sur le profil
    if (props.profil !== undefined) {
      // Renvoyer le component Profil.js
    }
  }

  return (
    <div className="widget-btn">
      {btnNext()}
      <div className="widget-btn-libelle">
        <div className="widget-btn-title" onClick={handleClick}>
          {props.title}
        </div>
        {displayNotif()}
      </div>
    </div>
  );
};

export default WidgetButton;

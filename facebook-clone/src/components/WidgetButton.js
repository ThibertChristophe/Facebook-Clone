import React from "react";

const WidgetButton = (props) => {
  function displayNotif() {
    // Si on a une notif
    if (props.notif !== undefined) {
      return <div className="notif-blue">{props.notif}</div>;
    }
  }

  return (
    <div className="widget-btn">
      <img src={props.img} alt="" />
      <div className="widget-btn-libelle">
        <div className="widget-btn-title">{props.title}</div>
        {displayNotif()}
      </div>
    </div>
  );
};

export default WidgetButton;

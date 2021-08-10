import React from "react";

const Notification = (props) => {
  return (
    <div className="notification">
      <div className="notification-img">
        <img src={props.img} alt="" />
      </div>
      <div className="notification-text">
        <p className="notif">{props.notif}</p>
        <p className="hist">{props.history}</p>
      </div>
      <div className="notification-btnPlus"></div>
    </div>
  );
};

export default Notification;

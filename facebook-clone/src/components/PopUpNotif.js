import React from "react";
import Notification from "./Notification";

const PopUpNotif = () => {
  return (
    <div className="popup-notif">
      <div className="popup-notif-header">
        <span>Plus tôt</span>
        <a href="">Voir tout</a>
      </div>
      <div className="popup-notif-notif-list">
        <Notification notif="1ere notif" history="history" />
        <Notification notif="1ere notif" history="history" />
        <Notification notif="1ere notif" history="history" />
        <Notification notif="1ere notif" history="history" />
        <Notification notif="1ere notif" history="history" />
      </div>
    </div>
  );
};

export default PopUpNotif;

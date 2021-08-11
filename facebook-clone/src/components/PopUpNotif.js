import React from "react";
import Notification from "./Notification";
import barackObama from "../img/barack.JPG";
const PopUpNotif = () => {
  return (
    <div className="popup-notif">
      <div className="popup-notif-header">
        <span>Plus tôt</span>
        <a href="">Voir tout</a>
      </div>
      <div className="popup-notif-notif-list">
        <Notification
          notif="Prénom Nom a ajouté une publication"
          history="Il y a 20min"
        />
        <Notification
          notif="Prénom Nom a une nouvelle photo"
          history="Il y a 2 jours"
        />
        <Notification
          notif="Prénom Nom a partagé la publication de Nom Prénom"
          history="Il y a une semaine"
        />
        <Notification
          notif="Prénom Nom aime votre commentaire"
          history="Il y a une semaine"
        />
        <Notification
          notif="Prénom Nom a une nouvelle photo"
          history="Il y a 2 semaines"
        />
      </div>
    </div>
  );
};

export default PopUpNotif;

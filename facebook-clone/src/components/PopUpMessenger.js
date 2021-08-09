import React from "react";
import ContactMessenger from "./ContactMessenger";

const PopUpMessenger = () => {
  return (
    <div className="popup-messenger">
      <div className="popup-messenger-search">
        <img src="./img/loupe.svg" width="16px" alt="" />
        <input type="text" placeholder="Rechercher dans Messenger" />
      </div>
      <div className="popup-messenger-contact-list">
        <ContactMessenger
          name="Barack Obama"
          history="Discussion vidéo terminée . 27min"
        />
        <ContactMessenger
          name="Barack Obama"
          history="Discussion vidéo terminée . 27min"
        />
      </div>
      <div className="popup-messenger-footer">
        <a href="">Tout voir dans messenger</a>
      </div>
    </div>
  );
};

export default PopUpMessenger;

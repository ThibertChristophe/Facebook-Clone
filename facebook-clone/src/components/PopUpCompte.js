import React from "react";
import ButtonTransparent from "./ButtonTransparent";

const PopUpCompte = () => {
  return (
    <div className="popup-compte">
      <div className="popup-compte-profil">
        <div className="popup-compte-profil-img">
          <img src="" alt="" />
        </div>
        <div className="popup-compte-profil-text">
          <p>Chris Thib</p>
          <a href="">Voir votre profil</a>
        </div>
      </div>
      <div className="popup-compte-separator"></div>
      <div className="popup-compte-avis">
        <div className="popup-compte-img">
          <ButtonTransparent class="exclamation" />
        </div>
        <div className="popup-compte-avis-text">
          <p>
            <strong>Donner votre avis</strong>
          </p>
          <p className="popup-compte-avis-text-sub">
            Aidez-nous à améliorer la nouvelle version de Facebook.
          </p>
        </div>
      </div>
      <div className="popup-compte-separator"></div>
      <div className="popup-compte-option-list">
        <div className="popup-compte-option">
          <img src="" alt="" />
          <p>Paramètre et confidentialité</p>
        </div>
      </div>
      <div className="popup-compte-footer"></div>
    </div>
  );
};

export default PopUpCompte;

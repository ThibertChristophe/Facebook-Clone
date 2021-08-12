import React from "react";

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
      <div className="popup-compte-avis">
        <img src="" alt="" />
        <div className="popup-compte-avis-text">
          <p>Donner votre avis</p>
          <p>Aidez-nous à améliorer la nouvelle version de Facebook.</p>
        </div>
      </div>
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

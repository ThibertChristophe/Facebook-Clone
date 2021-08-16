import React from "react";
import ButtonTransparent from "./ButtonTransparent";
import ButtonMenu from "./ButtonMenu";

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
          <ButtonMenu
            title="Changer de compte"
            desc="Se connecter en tant que Nom Prénom"
          />
          <ButtonMenu title="Paramètre et confidentialité" />
          <ButtonMenu title="Aide et assistance" />
          <ButtonMenu title="Affichage et accessibilité" />
          <ButtonMenu title="Se déconnecter" />
        </div>
      </div>
      <div className="popup-compte-footer"></div>
    </div>
  );
};

export default PopUpCompte;

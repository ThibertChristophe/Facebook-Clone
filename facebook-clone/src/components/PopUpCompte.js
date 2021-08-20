import React from "react";
import ButtonTransparent from "./ButtonTransparent";
import ButtonMenu from "./ButtonMenu";
import param from "../img/parametres-gear.svg";
import help from "../img/help.svg";
import moon from "../img/moon.svg";
import exit from "../img/logout.svg";

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
          <ButtonMenu title="Paramètre et confidentialité" img={param} />
          <ButtonMenu title="Aide et assistance" img={help} />
          <ButtonMenu title="Affichage et accessibilité" img={moon} />
          <ButtonMenu title="Se déconnecter" img={exit} />
        </div>
      </div>
      <div className="popup-compte-footer">
        <ul>
          <li>
            <a href="">Confidentialité</a>
          </li>
          <li>
            <a href="">Conditions générales</a>
          </li>
          <li>
            <a href="">Publicités</a>
          </li>
          <li>
            <a href="">Choix publicitaires</a>
          </li>
          <li>
            <a href="">Cookies</a>
          </li>
          <li>
            <a href="">Plus</a>
          </li>
          <li>
            <a href="">Facebook © 2021</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PopUpCompte;

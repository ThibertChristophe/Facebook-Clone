import React from "react";
import { Link } from "react-router-dom";

const SideBarLeftInvite = () => {
  return (
    <div className="sideBarLeftInvite">
      {/**============== HEADER ============== */}
      <div className="sideBarLeftInvite__header">
        <div className="sideBarLeftInvite__header__left">
          <Link to="/friends">
            <div className="arrowL"></div>
          </Link>
        </div>
        <div className="sideBarLeftInvite__header__right">
          <div>Amis</div>
          <div>
            <h2>Invitations</h2>
          </div>
        </div>
      </div>
      {/**============== BODY ============== */}
      <div className="sideBarLeftInvite__content">
        <div className="sideBarLeftInvite__content__resume">
          <div className="nbInvite">1 invitation</div>
          <div>
            <a href="#">Voir les invitations envoyées</a>
          </div>
        </div>
        <div className="sideBarLeftInvite__content__listInvite">
          {/**============== CARD ============== */}
          <div className="sideBarLeftInvite__card">
            <div className="card__left">
              <div className="card__left__img"></div>
            </div>
            <div className="card__right">
              <div className="card__right__data">
                <div className="name">Nom Prénom</div>
                <div className="amiCommun">2 amis en commun</div>
              </div>
              <div className="card__right__btn">
                <button className="btn-confirm">Confirmer</button>
                <button className="btn-delete">Supprimer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarLeftInvite;

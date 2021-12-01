import React from "react";

const SideBarLeftInvite = () => {
  return (
    <div className="sideBarLeftInvite">
      <div className="sideBarLeftInvite__header">
        <div className="sideBarLeftInvite__header__left">
          <div className="arrowL"></div>
        </div>
        <div className="sideBarLeftInvite__header__right">
          <div>Amis</div>
          <div>
            <h2>Invitations</h2>
          </div>
        </div>
      </div>
      <div className="sideBarLeftInvite__content">
        <div className="sideBarLeftInvite__content__resume">
          <div>1 invitation</div>
          <div>
            <a href="#">Voir les invitations envoyées</a>
          </div>
        </div>
        <div className="sideBarLeftInvite__content__listInvite">
          <div className="sideBarLeftInvite__card">
            <div className="card__left"></div>
            <div className="card__right">
              <div className="card__right__data">
                <div>Nom Prénom</div>
                <div>2 amis en commun</div>
              </div>
              <div className="card__right_btn">
                <button>Confirmer</button>
                <button>Supprimer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarLeftInvite;

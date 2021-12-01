import React from "react";

const ListRequests = () => {
  return (
    <div className="listRequests">
      <div className="listRequests__resume">
        <div className="nbInvite">1 invitation</div>
        <div>
          <a href="#">Voir les invitations envoyées</a>
        </div>
      </div>
      <div className="listRequests__listInvite">
        {/**============== CARD ============== */}
        <div className="listRequests__card">
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
  );
};

export default ListRequests;

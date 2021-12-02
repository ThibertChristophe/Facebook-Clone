import React from "react";

const ListSuggestions = () => {
  return (
    <div className="listSuggestions">
      <div className="listRequests__resume">
        <div className="nbInvite">Connaissez-vous...</div>
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

export default ListSuggestions;

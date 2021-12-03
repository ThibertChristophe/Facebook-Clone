import React from "react";

const SideBarWatch = () => {
  return (
    <div className="sideBarWatch">
      <div className="sideBarWatch__header">
        <div className="sideBarWatch__header__titre">
          <h2>Watch</h2>
          <div className="ecrouFond">
            <span className="ecrou"></span>
          </div>
        </div>
        <div className="sideBarWatch__header__input">
          <div className="loupe"></div>
          <input type="text" placeholder="Rechercher des vidéos" />
        </div>
      </div>
      <div className="sideBarWatch__list">
        <div className="sideBarWatch__list__card ">
          <div className="card__left homeActive">
            <div className="card__left__img"></div>
          </div>
          <div className="card__right">Accueil</div>
        </div>
        <div className="sideBarWatch__list__card ">
          <div className="card__left ">
            <div className="card__left__img"></div>
          </div>
          <div className="card__right">En direct</div>
        </div>
        <div className="sideBarWatch__list__card ">
          <div className="card__left ">
            <div className="card__left__img"></div>
          </div>
          <div className="card__right">Programmes</div>
        </div>
        <div className="sideBarWatch__list__card ">
          <div className="card__left ">
            <div className="card__left__img"></div>
          </div>
          <div className="card__right">Vidéos enregistrées</div>
        </div>
      </div>
      <div className="sideBarWatch__abonnement"></div>
    </div>
  );
};

export default SideBarWatch;

import React from "react";

const Profil = ({ name }) => {
  return (
    <div className="profil">
      <div className="profil__header">
        <div className="profil__header__couverture">
          <button>Changer la photo de couverture</button>
        </div>
        <div className="profil__header__mid">
          <div className="profil__header__mid__imgProfil"></div>
          <div className="profil__header__mid__donnee">
            <span className="name">Nom Prénom</span>
            <span>80 amis</span>
            <div className="profil__header__mid__action">
              <span>Liste d'amis</span>
              <div className="profil__header__mid__action__btn">
                <button>Ajouter à a story</button>
                <button>Modifier le profil</button>
              </div>
            </div>
          </div>
        </div>
        <div className="profil__header__menu">
          <ul>
            <li>Publication</li>
            <li>A propos</li>
            <li>Amis</li>
            <li>Photos</li>
            <li>Archive stories</li>
            <li>Vidéos</li>
            <li>Plus</li>
          </ul>
          <button>...</button>
        </div>
      </div>
      <div className="profil__body"></div>
    </div>
  );
};

export default Profil;

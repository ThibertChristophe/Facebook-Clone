import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Saloons from "../components/Saloons";

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
            <NavLink to="/Profil/" exact>
              <li>Publication</li>
            </NavLink>
            <NavLink to="/Profil/about">
              <li>A propos</li>
            </NavLink>
            <NavLink to="/Profil/amis">
              <li>Amis</li>
            </NavLink>
            <NavLink to="/Profil/photos">
              <li>Photos</li>
            </NavLink>
            <NavLink to="/Profil/stories">
              <li>Archive stories</li>
            </NavLink>
            <NavLink to="/Profil/videos">
              <li>Vidéos</li>
            </NavLink>
            <NavLink to="/Profil/plus">
              <li>Plus</li>
            </NavLink>
          </ul>
          <button>...</button>
        </div>
      </div>
      <div className="profil__body">
        <Switch>
          <Route path="/Profil/" exact />
          <Route path="/Profil/about" exact component={Saloons} />
        </Switch>
      </div>
    </div>
  );
};

export default Profil;

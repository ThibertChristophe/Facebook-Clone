import React, { useState, useEffect } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Saloons from "../components/Saloons";
import Publication from "./Publication";
import plus from "../img/plus-rond.png";
import edit from "../img/edit.png";

const Profil = ({ name }) => {
  const [couv, setCouv] = useState("");

  // Petite image aleatoire pour la couverture
  useEffect(() => {
    const loadCouverture = async () => {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const json = await response.json();
      setCouv(json[0].url);
    };
    loadCouverture();
  }, []);

  return (
    <div className="profil">
      <div className="profil__header">
        <div className="profil__header__couverture">
          <img src={couv} alt="" />
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
                <div className="addStory btnAction">
                  <img src={plus} alt="" />
                  <span>Ajouter à a story</span>
                </div>
                <div className="modifyProfil btnAction">
                  <img src={edit} alt="" />
                  <span>Modifier le profil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profil__header__menu">
          <ul>
            <NavLink to="/Profil/" exact>
              <li>Publication</li>
            </NavLink>
            <NavLink to="/Profil/about" exact>
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
          <div>...</div>
        </div>
      </div>
      <div className="profil__body">
        <Switch>
          <Route path="/Profil/" exact component={Publication} />
          <Route path="/Profil/about" exact component={Saloons} />
        </Switch>
      </div>
    </div>
  );
};

export default Profil;

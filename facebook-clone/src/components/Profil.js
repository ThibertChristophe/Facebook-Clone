import React, { useState, useEffect } from "react";
import { NavLink, Switch, Route, useLocation } from "react-router-dom";
import About from "../components/About";
import PostsPopUp from "../components/PostsPopUp";
import Publication from "./Publication";
import plus from "../img/plus-rond.png";
import edit from "../img/edit.png";
import Friends from "./Friends";

const Profil = ({ name }) => {
  const [couv, setCouv] = useState("");
  const [profil, setProfil] = useState("");
  // extract pathname from location
  const { pathname } = useLocation();
  // Petite image aleatoire pour la couverture
  useEffect(() => {
    const loadCouverture = async () => {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const json = await response.json();
      setCouv(json[0].url);
    };

    const loadProfil = async () => {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const json = await response.json();
      setProfil(json[0].url);
    };
    loadCouverture();
    loadProfil();
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
            <span>
              <a href="#">80 Amis</a>
            </span>
            <div className="profil__header__mid__action">
              <div className="listFriends">
                <div className="listFriends__friend">
                  {/* Affichage de la popup ici*/}
                  <div className="listFriends__friend__popup">
                    <PostsPopUp nom="Nom" prenom="Prénom" />
                  </div>
                </div>
                <div className="listFriends__friend">
                  <div className="listFriends__friend__popup">
                    <PostsPopUp nom="Nom" prenom="Prénom" />
                  </div>
                </div>
                <div className="listFriends__friend">
                  <div className="listFriends__friend__popup">
                    <PostsPopUp nom="Nom" prenom="Prénom" />
                  </div>
                </div>
                <div className="listFriends__friend">
                  <div className="listFriends__friend__popup">
                    <PostsPopUp nom="Nom" prenom="Prénom" />
                  </div>
                </div>
              </div>
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
            <NavLink
              to="/Profil/"
              isActive={() =>
                ["/Profil", "/Profil/", "/Profil/grid"].includes(pathname)
              }
              exact
            >
              <li>Publication</li>
            </NavLink>
            <NavLink
              to="/Profil/about"
              isActive={() =>
                [
                  "/Profil/about",
                  "/Profil/about_work",
                  "/Profil/about_content",
                  "/Profil/about_place",
                  "/Profil/about_family",
                  "/Profil/about_detail",
                  "/Profil/about_life_event",
                ].includes(pathname)
              }
              exact
            >
              <li>A propos</li>
            </NavLink>
            <NavLink to="/Profil/friends">
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
              <li className="plus">
                Plus
                <svg viewBox="0 0 20 20" width="1em" height="1em">
                  <path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path>
                </svg>
              </li>
            </NavLink>
          </ul>
          <div className="btn-more">...</div>
        </div>
      </div>
      <div className="profil__body">
        <Switch>
          <Route path="/Profil/" exact component={Publication} />
          <Route path="/Profil/grid" exact component={Publication} />
          <Route path="/Profil/about" exact component={About} />
          <Route path="/Profil/about_*" exact component={About} />
          <Route path="/Profil/friends" exact component={About} />
          <Route path="/Profil/photos" exact component={About} />
          <Route path="/Profil/videos" exact component={About} />
          <Route path="/Profil/stories" exact component={About} />
          <Route path="/Profil/plus" exact component={About} />
        </Switch>
      </div>
    </div>
  );
};

export default Profil;

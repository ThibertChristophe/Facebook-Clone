import React from "react";
import WhatNew from "./WhatNew";

import Posts from "./Posts";
import { NavLink } from "react-router-dom";

const Publication = () => {
  return (
    <div className="publication">
      <div className="publication__right ">
        <div className="publication__right__intro box">
          <h2>Intro</h2>
          <div className="publication__right__intro__action">
            <div className="btn">
              <span>Ajouter une bio</span>
            </div>
            <div className="btn">
              <span>Modifier les infos</span>
            </div>
            <div className="btn">
              <span>Ajouter des loisirs</span>
            </div>
            <div className="btn">
              <span>Ajouter du contenu à la une</span>
            </div>
          </div>
        </div>
        <div className="box publication__right__photos">
          <h2>Photos</h2>
        </div>
        <div className="box publication__right__amis">
          <h2>Amis</h2>
        </div>
      </div>
      <div className="publication__left ">
        <div className="publication__left__whatnew box">
          <WhatNew />
        </div>
        <div className="box publication__left__public">
          <div className="publication__left__public__head">
            <h2>Publications</h2>
            <div className="publication__left__public__head__listbtn">
              <div className="btn filtre">
                <img src="" alt="" />
                <span>Filtres</span>
              </div>
              <div className="btn pubBtn">
                <img src="" alt="" />
                <span>Gérer les publications</span>
              </div>
            </div>
          </div>
          <div className="publication__left__public__bot">
            <div className="switch">
              <img src="" alt="" />
              <NavLink to="/Profil/" exact>
                Vue Liste
              </NavLink>
            </div>
            <div className="switch">
              <img src="" alt="" />
              <span>Vue Grille</span>
            </div>

            <div className="publication__left__public__bot__grid"></div>
          </div>
        </div>
        <div className="publication__left__postsList">
          <div className="publication__left__postsList__post">
            <Posts titre="Nom Prénom" />
          </div>
          <div className="publication__left__postsList__post">
            <Posts titre="Nom Prénom" />
          </div>
          <div className="publication__left__postsList__post">
            <Posts titre="Nom Prénom" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;

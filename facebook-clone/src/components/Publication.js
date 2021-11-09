import React from "react";
import WhatNew from "./WhatNew";

import Posts from "./Posts";
import { NavLink, Switch, Route } from "react-router-dom";

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
          <div className="publication__right__photos__head">
            <h2>Photos</h2>
            <div className="btn-trans-bleu">Toutes les photos</div>
          </div>
          <div className="publication__right__photos__list">
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
          </div>
        </div>
        <div className="box publication__right__amis">
          <div className="publication__right__amis__head">
            <h2>Amis</h2>
            <div className="btn-trans-bleu">Tous les amis</div>
          </div>
          <div className="publication__right__amis__list">
            <div className="publication__right__amis__list__amiCard">
              <div className="amiCard__photo"></div>
              <div className="amiCard__name">Nom Prenom</div>
            </div>
            <div className="publication__right__amis__list__amiCard">
              <div className="amiCard__photo"></div>
              <div className="amiCard__name">Nom Prenom</div>
            </div>
            <div className="publication__right__amis__list__amiCard">
              <div className="amiCard__photo"></div>
              <div className="amiCard__name">Nom Prenom</div>
            </div>
            <div className="publication__right__amis__list__amiCard">
              <div className="amiCard__photo"></div>
              <div className="amiCard__name">Nom Prenom</div>
            </div>
            <div className="publication__right__amis__list__amiCard">
              <div className="amiCard__photo"></div>
              <div className="amiCard__name">Nom Prenom</div>
            </div>
            <div className="publication__right__amis__list__amiCard">
              <div className="amiCard__photo"></div>
              <div className="amiCard__name">Nom Prenom</div>
            </div>
            <div className="publication__right__amis__list__amiCard">
              <div className="amiCard__photo"></div>
              <div className="amiCard__name">Nom Prenom</div>
            </div>
            <div className="publication__right__amis__list__amiCard">
              <div className="amiCard__photo"></div>
              <div className="amiCard__name">Nom Prenom</div>
            </div>
            <div className="publication__right__amis__list__amiCard">
              <div className="amiCard__photo"></div>
              <div className="amiCard__name">Nom Prenom</div>
            </div>
          </div>
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
            <NavLink to="/Profil/" exact className="switch">
              <img src="" alt="" />
              <span>Vue Liste</span>
            </NavLink>
            <NavLink to="/Profil/grid" exact className="switch">
              <img src="" alt="" />
              <span>Vue Grille</span>
            </NavLink>
            <div className="publication__left__public__bot__grid"></div>
          </div>
        </div>
        <Switch>
          <Route path="/Profil/" exact>
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
              <div className="publication__left__postsList__post">
                <Posts titre="Nom Prénom" />
              </div>
            </div>
          </Route>
          <Route path="/Profil/grid" exact />
        </Switch>
      </div>
    </div>
  );
};

export default Publication;

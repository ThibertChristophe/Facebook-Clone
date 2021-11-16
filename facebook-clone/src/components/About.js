import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";

import FriendsVignette from "./FriendsVignette";
import Posts from "../components/Posts";
import Overview from "./Overview";
import AboutWork from "./AboutWork";

const About = () => {
  return (
    <div className="about">
      <div className="about__header box">
        <div className="about__header__left">
          <h2>À Propos</h2>
          <ul>
            <NavLink to="/Profil/about">
              <li>
                <span>Vue d'ensemble</span>
              </li>
            </NavLink>
            <NavLink to="/Profil/about_work">
              <li>Emploi et scolarité</li>
            </NavLink>
            <NavLink to="/Profil/about_place">
              <li>Lieux de résidence</li>
            </NavLink>
            <NavLink to="/Profil/about_content">
              <li>Informations générales et coordonnées</li>
            </NavLink>
            <NavLink to="/Profil/about_family">
              <li>Famille et relations</li>
            </NavLink>
            <NavLink to="/Profil/about_detail">
              <li>Détails sur vours</li>
            </NavLink>
            <NavLink to="/Profil/about_life_event">
              <li>Évènements marquants</li>
            </NavLink>
          </ul>
        </div>
        <div className="about__header__right">
          <Switch>
            <Route path="/Profil/about" exact component={Overview} />

            <Route path="/Profil/about_work" exact component={AboutWork} />

            {/* <Route path="/Profil/about" exact /> */}
          </Switch>
        </div>
      </div>
      <div className="about__friends box">
        <div className="about__friends__head">
          <h2>Amis</h2>
          <div className="action-btn">
            <div className="btn-blue">Invitations</div>
            <div className="btn-blue">Retrouver des amis</div>
            <div className="btn-more">...</div>
          </div>
        </div>
        <div className="about__friends__onglet">
          <ul>
            <li>Tous les amis</li>
            <li>Ville d'origine</li>
            <li>Abonnements</li>
          </ul>
        </div>
        <div className="about__friends__content">
          <FriendsVignette />
          <FriendsVignette />
          <FriendsVignette />
          <FriendsVignette />
          <FriendsVignette />
          <FriendsVignette />
        </div>
        <div className="about__friends__footer">
          <button>Voir tout</button>
        </div>
      </div>
      <div className="about__photo box">
        <div className="about__photo__head">
          <h2>Photos</h2>
          <div className="action-btn">
            <div className="btn-blue">Invitations</div>
            <div className="btn-blue">Retrouver des amis</div>
            <div className="btn-more">...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

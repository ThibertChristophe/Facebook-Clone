import React from "react";
import { NavLink, Switch, Route, useLocation } from "react-router-dom";
import FriendsVignette from "./FriendsVignette";
import Overview from "./Overview";
import AboutWork from "./AboutWork";

const About = () => {
  const { pathname } = useLocation();
  const tabPhoto = [
    "Photo",
    "Photo",
    "Photo",
    "Photo",
    "Photo",
    "Photo",
    "Photo",
    "Photo",
  ];

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
            <Route path="/Profil/about/all" exact component={Overview} />
            <Route path="/Profil/about_work" exact component={AboutWork} />
            <Route path="/Profil/about_work/all" exact component={AboutWork} />
            {/* <Route path="/Profil/about" exact /> */}
          </Switch>
        </div>
      </div>
      {/*============ FRIENDS ===========*/}
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
            <ul>
              <NavLink to="about/all" exact>
                <li>Tous les amis</li>
              </NavLink>
              <NavLink to="about/City" exact>
                <li>Ville d'origine</li>
              </NavLink>
              <li>Abonnements</li>
            </ul>
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
      {/*============ PHOTOS ===========*/}
      <div className="about__photos box">
        <div className="about__photos__head">
          <h2>Photos</h2>
          <div className="action-btn">
            <div className="btn-blue">Ajouter des photos/vidéos</div>
            <div className="btn-more">...</div>
          </div>
        </div>
        <div className="about__friends__onglet">
          <ul>
            <li>Photos de vous</li>
            <li>Vos photos</li>
            <li>Albums</li>
          </ul>
        </div>
        <div className="about__photos__content">
          {tabPhoto.map((Photo, index) => {
            return (
              <div className="about__photos__content__card" key={index}>
                <div className="about__photos__content__card__img"></div>
                <div className="about__photos__content__card__edit"></div>
              </div>
            );
          })}
        </div>
        <div className="about__friends__footer">
          <button>Voir tout</button>
        </div>
      </div>
    </div>
  );
};

export default About;

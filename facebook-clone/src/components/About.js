import React from "react";
import { NavLink } from "react-router-dom";
import home from "../img/home.png";
import localisation from "../img/localisation.png";
import coeur from "../img/coeur.png";
import phone from "../img/phone-grey.png";
import friends from "../img/amis-small.png";
import FriendsVignette from "./FriendsVignette";

const About = () => {
  return (
    <div className="about">
      <div className="about__header box">
        <div className="about__header__left">
          <h2>À Propos</h2>
          <ul>
            <NavLink to="/Profil/">
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
          <ul>
            <li>
              <span>Lieu de travail</span>
            </li>
            <li>
              <span>Lycée</span>
            </li>
            <li>
              <span>Université</span>
            </li>
            <li>
              <div className="about__header__right__liRight">
                <img src={home} />
                <span>Habite à</span>
              </div>
              <div className="about__header__right__left">
                <div className="about__header__right__friends">
                  <img
                    className="about__header__right__friends__friendsImg"
                    src={friends}
                    alt=""
                  />
                </div>
                <div className="about__header__right__friends__more">...</div>
              </div>
            </li>
            <li>
              <div className="about__header__right__liRight">
                <img src={localisation} />
                <span>De Bruxelles</span>
              </div>
              <div className="about__header__right__left">
                <div className="about__header__right__friends">
                  <img
                    className="about__header__right__friends__friendsImg"
                    src={friends}
                    alt=""
                  />
                </div>
                <div className="about__header__right__friends__more">...</div>
              </div>
            </li>
            <li>
              <div className="about__header__right__liRight">
                <img src={coeur} />
                <span>Marié(e)</span>
              </div>
              <div className="about__header__right__left">
                <div className="about__header__right__friends">
                  <img
                    className="about__header__right__friends__friendsImg"
                    src={friends}
                    alt=""
                  />
                </div>
                <div className="about__header__right__friends__more">...</div>
              </div>
            </li>
            <li>
              <div className="about__header__right__liRight">
                <img src={phone} />
                <span>0477 11 11 11</span>
              </div>
              <div className="about__header__right__left">
                <div className="about__header__right__friends">
                  <img
                    className="about__header__right__friends__friendsImg"
                    src={friends}
                    alt=""
                  />
                </div>
                <div className="about__header__right__friends__more">...</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="about__friends box">
        <div className="about__friends__head">
          <h2>Amis</h2>
          <div className="about__friends__head__action-btn">
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
          <div className="about__photo__head__action-btn">
            <div>Invitations</div>
            <div>Retrouver des amis</div>
            <div>...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

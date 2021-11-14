import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="about__header box">
        <div className="about__header__left">
          <h2>À Propos</h2>
          <ul>
            <li>Vue d'ensemble</li>
            <li>Emploi et scolarité</li>
            <li>Lieux de résidence</li>
            <li>Informations générales et coordonnées</li>
            <li>Famille et relations</li>
            <li>Détails sur vours</li>
            <li>Évènements marquants</li>
          </ul>
        </div>
        <div className="about__header__right">
          <ul>
            <li>Lieu de travail</li>
            <li>Lycée</li>
            <li>Unviersité</li>
            <li>Habite à</li>
            <li>De Bruxelles</li>
            <li>Marié(e)</li>
            <li>Numéro de téléphone</li>
          </ul>
        </div>
      </div>
      <div className="about__friends box">
        <div className="about__friends__head">
          <h2>Amis</h2>
          <div className="about__friends__head__action-btn">
            <div>Invitations</div>
            <div>Retrouver des amis</div>
            <div>...</div>
          </div>
        </div>
        <div className="about__friends__onglet">
          <ul>
            <li>Tous les amis</li>
            <li>Ville d'origine</li>
            <li>Abonnements</li>
          </ul>
        </div>
        <div className="about__friends__content"></div>
        <div className="about__friends__footer"></div>
      </div>
    </div>
  );
};

export default About;

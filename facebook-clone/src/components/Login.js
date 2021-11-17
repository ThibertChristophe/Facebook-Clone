import React from "react";

const Login = ({ connect }) => {
  connect = true;
  return (
    <div className="login">
      <div className="login__content">
        <div className="login__content__left">
          <h1>facebookClone</h1>
          <h2>Connexions récentes</h2>
          <div className="lib">
            Cliquez sur votre image ou sur Ajouter un compte
          </div>
          <div className="login__content__left__listCompte">
            <div className="login__content__left__listCompte__card">
              <div className="login__content__left__listCompte__card__img"></div>
              <div className="login__content__left__listCompte__card__name">
                Nom Prénom
              </div>
            </div>
            <div className="login__content__left__listCompte__card">
              <div className="login__content__left__listCompte__card__img"></div>
              <div className="login__content__left__listCompte__card__name add">
                Ajouter un compte
              </div>
            </div>
          </div>
        </div>
        <div className="login__content__right">
          <div className="login__content__right__form">
            <form action="">
              <input
                type="text"
                placeholder="Adresse e-mail ou numéro de tél."
              />
              <input type="text" placeholder="Mot de passe" />
              <input type="submit" value="Se connecter" className="connect" />
            </form>
            <div className="missMDP">Mot de passe oublié ?</div>
            <div className="login__content__right__form__newCompte">
              <button>Créer nouveau compte</button>
            </div>
          </div>
          <div className="login__content__right__footer">
            <p>
              <strong>Créer une Page</strong> pour une célébrité, une marque ou
              une entreprise.
            </p>
          </div>
        </div>
      </div>
      <div className="login__footer">
        <div className="login__footer__langue">
          <ul>
            <li>Français (France)</li>
            <li>English (US)</li>
            <li>Vlaams</li>
            <li>Türkce</li>
            <li>Deutsch</li>
            <li>Polski</li>
            <li>Romania</li>
            <li>Italiano</li>
            <li>Espanol</li>
            <li>Português (Brasil)</li>
          </ul>
        </div>
        <div className="login__footer__menu">
          <ul>
            <li>S'inscrire</li>
            <li>Se connecter</li>
            <li>Messenger</li>
            <li>Facebook Lite</li>
            <li>Watch</li>
            <li>Lieux</li>
            <li>Jeux</li>
            <li>Marketplace</li>
            <li>Facebook Pay</li>
            <li>Offres d'emploi</li>
            <li>Oculus</li>
            <li>Portal</li>
            <li>Instagram</li>
            <li>Bulletin</li>
            <li>Local</li>
            <li>Collectes de fonds</li>
            <li>Services</li>
            <li>Centre d'informations sur les élections</li>
            <li>Groupes</li>
            <li>A propos</li>
            <li>Créer une publicité</li>
            <li>Créer une Page</li>
            <li>Développeurs</li>
            <li>Emplois</li>
            <li>Confidnetialité</li>
            <li>Cookies</li>
            <li>Choisir sa pub</li>
            <li>Conditions générales</li>
            <li>Aide</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import WidgetButton from "./WidgetButton";
import img_profil from "../img/profil.jpg";
import imgCovid from "../img/cov19.png";
import imgAmis from "../img/fiends.png";
import imgLive from "../img/live.png";
import imgGroup from "../img/group.png";
import imgMarketplace from "../img/marketplace.png";
import imgWatch from "../img/watch.png";
import imgEvent from "../img/event.png";
import imgSouvenir from "../img/souvenir.png";
import imgArrowDown from "../img/arrow-down-simple.svg";
import imgRaccourcis1 from "../img/raccourcis.jpg";
import imgClimat from "../img/climat.png";
import imgCard from "../img/card.png";
import imgFavoris from "../img/favori.png";
import imgForum from "../img/helpForum.png";
import imgPlays from "../img/plays.png";
import imgMsg from "../img/messenger.png";
import imgMeteo from "../img/meteo.png";
import imgOculus from "../img/oculus.png";
import imgOffre from "../img/emploi.png";
import imgPub from "../img/pub.png";
import Raccourcis from "./Raccourcis";
import { useState } from "react";
import { Link } from "react-router-dom";

const WidgetLeft = () => {
  // code jsx contenant les boutons
  const [allBtn, setAllBtn] = useState("");
  // changement du titre du bouton "Voir plus"
  const [titleBtn, setTitleBtn] = useState("Voir plus");

  /**
   * Affiche le bouton modifier de la partie raccourcis
   */
  function showRaccourcis() {
    const btn = document.querySelector(".raccourcis-containt-btnModify");
    btn.classList.add("show");
  }
  /**
   * Cache le bouton modifier de la partie raccourcis
   */
  function disapearRaccourcis() {
    const btn = document.querySelector(".raccourcis-containt-btnModify");
    btn.classList.remove("show");
  }

  /**
   * Affiche ou cache les boutons supplémentaires du menu
   */
  function displayAllBtn() {
    // On rend visible
    if (allBtn === "") {
      setAllBtn(
        <>
          <WidgetButton
            title="Centre d'information sur les sciences du climat"
            img={imgClimat}
          />
          <WidgetButton title="Facebook Pay" img={imgCard} />
          <WidgetButton title="Favoris" img={imgFavoris} />
          <WidgetButton title="Forum d'aide" img={imgForum} />
          <WidgetButton title="Jouer à des jeux" img={imgPlays} />
          <WidgetButton title="Messenger" img={imgMsg} />
          <WidgetButton title="Météo" img={imgMeteo} />
          <WidgetButton title="Oculus" img={imgOculus} />
          <WidgetButton title="Offres d'emploi" img={imgOffre} />
          <WidgetButton title="Publicités" img={imgPub} />
        </>
      );
      setTitleBtn("Voir moins");
    } else {
      // On cache les menu supplementaires
      setAllBtn("");
      setTitleBtn("Voir plus");
    }
  }

  return (
    <div className="widget-left">
      <div className="widget-left-content">
        <div className="widget-left-menu">
          <Link to="/Profil">
            <WidgetButton title="Chris Thib" img={img_profil} profil />
          </Link>
          <WidgetButton title="Amis" img={imgAmis} />
          <WidgetButton
            title="COVID-19 - Centre d'information"
            img={imgCovid}
          />
          <WidgetButton title="Watch" img={imgWatch} />
          <WidgetButton title="Vidéo en direct" img={imgLive} />
          <WidgetButton title="Groupes" img={imgGroup} notif="2 nouveaux" />
          <WidgetButton title="Marketplace" img={imgMarketplace} />
          <WidgetButton title="Évènements" img={imgEvent} />
          <WidgetButton title="Souvenirs" img={imgSouvenir} />
          {/* Suite des boutons pas encore visible par défaut*/}
          {allBtn}
          {/****/}
          <div onClick={displayAllBtn}>
            <WidgetButton title={titleBtn} img={imgArrowDown} next />
          </div>
        </div>
        {/* Raccourcis */}
        <div
          className="raccourcis-containt"
          onMouseEnter={showRaccourcis}
          onMouseLeave={disapearRaccourcis}
        >
          <div className="raccourcis-containt-title">
            <h3>Vos raccourcis</h3>
            <button className="raccourcis-containt-btnModify">Modifier</button>
          </div>
          <Raccourcis img={imgRaccourcis1} title="NodeJS experience" />
        </div>
      </div>
      <div className="widget-left-footer">
        <p>
          <a href="">Confidentialité</a> · <a href="">Conditions générales</a> ·{" "}
          <a href="">Publicités</a> ·<a href="">Choix publicitaires</a> ·{" "}
          <a href="">Cookies</a> · <a href="">Plus</a> · Facebook © 2021
        </p>
      </div>
    </div>
  );
};

export default WidgetLeft;

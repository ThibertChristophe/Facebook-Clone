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

const WidgetLeft = () => {
  const [allBtn, setAllBtn] = useState("");

  function showRaccourcis() {
    const btn = document.querySelector(".raccourcis-containt-btnModify");
    btn.classList.add("show");
  }
  function disapearRaccourcis() {
    const btn = document.querySelector(".raccourcis-containt-btnModify");
    btn.classList.remove("show");
  }

  function allList() {
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
  }

  return (
    <div className="widget-left">
      <div className="widget-left-content">
        <div className="widget-left-menu">
          <WidgetButton title="Chris Thib" img={img_profil} />
          <WidgetButton
            title="COVID-19 - Centre d'information"
            img={imgCovid}
          />
          <WidgetButton title="Amis" img={imgAmis} />
          <WidgetButton title="Watch" img={imgWatch} />
          <WidgetButton title="Vidéo en direct" img={imgLive} />
          <WidgetButton title="Groupes" img={imgGroup} notif="2 nouveaux" />
          <WidgetButton title="Marketplace" img={imgMarketplace} />
          <WidgetButton title="Évènements" img={imgEvent} />
          <WidgetButton title="Souvenirs" img={imgSouvenir} />
          {allBtn}
          <div onClick={allList}>
            <WidgetButton title="Voir plus" img={imgArrowDown} next />
          </div>
        </div>
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

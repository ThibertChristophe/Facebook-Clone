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
import Raccourcis from "./Raccourcis";

const WidgetLeft = () => {
  function showRaccourcis(e) {
    const btn = e.target.querySelector(".raccourcis-containt-btnModify");
    console.log(btn);
    btn.classList.add("show");
  }
  function disapearRaccourcis(e) {
    const btn = e.target.querySelector(".raccourcis-containt-btnModify");
    console.log(btn);
    btn.classList.remove("show");
  }

  return (
    <div className="widget-left">
      <div className="widget-left-menu">
        <WidgetButton title="Chris Thib" img={img_profil} />
        <WidgetButton title="COVID-19 - Centre d'information" img={imgCovid} />
        <WidgetButton title="Amis" img={imgAmis} />
        <WidgetButton title="Watch" img={imgWatch} />
        <WidgetButton title="Vidéo en direct" img={imgLive} />
        <WidgetButton title="Groupes" img={imgGroup} notif="2 nouveaux" />
        <WidgetButton title="Marketplace" img={imgMarketplace} />
        <WidgetButton title="Évènements" img={imgEvent} />
        <WidgetButton title="Souvenirs" img={imgSouvenir} />
        <WidgetButton title="Voir plus" img={imgArrowDown} next />
      </div>
      <div className="raccourcis-containt">
        <div
          className="raccourcis-containt-title"
          onMouseEnter={showRaccourcis}
          onMouseLeave={disapearRaccourcis}
        >
          <h3>Vos raccourcis</h3>
          <button className="raccourcis-containt-btnModify">Modifier</button>
        </div>
        <Raccourcis img={imgRaccourcis1} />
      </div>
      <div className="widget-left-footer">
        <p>
          Confidentialité · Conditions générales · Publicités · Choix
          publicitaires · Cookies · · Facebook © 2021
        </p>
      </div>
    </div>
  );
};

export default WidgetLeft;

import React from "react";
import imgProfil from "../img/profil.jpg";
import ButtonLogo from "./ButtonLogo";

const WhatNew = () => {
  const name = "Chris";

  return (
    <div className="whatNew">
      <div className="whatNew-content">
        <div className="whatNew-img">
          <img src={imgProfil} alt="" srcset="" />
        </div>
        <div className="whatNew-input">Quoi de neuf, Chris ?</div>
      </div>
      <div className="whatNew-buttons">
        <ButtonLogo title="Vidéo en direct" classe="video" />
        <ButtonLogo title="Photo/Vidéo" classe="photo" />
        <ButtonLogo title="Humeur/Activité" classe="humeur" />
      </div>
    </div>
  );
};

export default WhatNew;

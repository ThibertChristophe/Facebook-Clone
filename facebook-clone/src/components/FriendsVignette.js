import React, { useState, useEffect } from "react";
import PostsPopUp from "./PostsPopUp";

const FriendsVignette = () => {
  const [img, setImg] = useState("");

  useEffect(() => {
    const loadimg = async () => {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const json = await response.json();
      setImg(json[0].url);
    };
    loadimg();
  }, []);

  return (
    <div className="friends-vignette">
      <div className="friends-vignette__imageProfil">
        <img className="imgProfil" src={img} alt="" />
        <div className="friends-vignette-popup">
          <PostsPopUp nom="Nom" prenom="Prénom" />
        </div>
      </div>

      <div className="friends-vignette__donnees">
        <div className="friends-vignette__donnees__name">
          <div className="friends-vignette__donnees__popup">
            <PostsPopUp nom="Nom" prenom="Prénom" />
          </div>
          Nom Prénom
        </div>
        <div className="friends-vignette__donnees__sub">5 amis en commun</div>
      </div>
      <div className="friends-vignette__plus">...</div>
    </div>
  );
};

export default FriendsVignette;

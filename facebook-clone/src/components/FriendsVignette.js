import React, { useState, useEffect } from "react";

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
      <img src={img} alt="" />
      <div className="friends-vignette__donnees">
        <div className="friends-vignette__donnees__name">Nom Prénom</div>
        <div className="friends-vignette__donnees__sub">5 amis en commun</div>
      </div>
      <div className="friends-vignette__plus">...</div>
    </div>
  );
};

export default FriendsVignette;

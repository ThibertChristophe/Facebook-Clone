import React, { useState, useRef } from "react";
import LogoFacebook from "./LogoFacebook";

const Search = () => {
  const [logoLoupe, setLogoLoupe] = useState(
    <img src="./img/loupe.svg" width="20px" alt="" />
  );

  const [logoFacebook, setlogoFacebook] = useState(<LogoFacebook />);

  const popup = useRef(null);

  const priseFocus = (e) => {
    // On bouge le placeholder du champ
    e.target.style = "padding-left: 10px;";
    // On fait apparaitre la popup de recherche recentes
    popup.current.style.display = "block";
    // On cache l'image de loupe
    setLogoLoupe("");
    // On cache le logo facebook
    setlogoFacebook("");
  };

  const sortieFocus = (e) => {
    e.target.style = "padding-left: 40px;";
    popup.current.style.display = "none";
    setLogoLoupe(<img src="./img/loupe.svg" width="20px" alt="" />);
    setlogoFacebook(<LogoFacebook />);
  };

  return (
    <div className="search">
      <div className="search__content">
        {logoFacebook}
        {logoLoupe}
        <input
          type="search"
          placeholder="Rechercher sur Facebook "
          onFocusCapture={priseFocus}
          onBlur={sortieFocus}
        />
      </div>
      <div className="search__popup" ref={popup}>
        <div className="search__popup__header">
          <span>Recherches récentes</span>
          <button>Modifier</button>
        </div>
      </div>
    </div>
  );
};

export default Search;

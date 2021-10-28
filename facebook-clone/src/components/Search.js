import React, { useState } from "react";
import LogoFacebook from "./LogoFacebook";

const Search = () => {
  const [logoLoupe, setLogoLoupe] = useState(
    <img src="./img/loupe.svg" width="20px" alt="" />
  );

  const [logoFacebook, setlogoFacebook] = useState(<LogoFacebook />);

  const priseFocus = (e) => {
    const pop = document.querySelector(".search__popup");
    e.target.style = "padding-left: 10px;";
    pop.style.display = "block";
    setLogoLoupe("");
    setlogoFacebook("");
  };

  const sortieFocus = (e) => {
    const pop = document.querySelector(".search__popup");
    e.target.style = "padding-left: 40px;";
    pop.style.display = "none";
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
      <div className="search__popup">
        <div className="search__popup__header">
          <span>Recherches récentes</span>
          <button>Modifier</button>
        </div>
      </div>
    </div>
  );
};

export default Search;

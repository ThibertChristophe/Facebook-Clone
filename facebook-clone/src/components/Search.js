import React, { useState, useEffect, useRef } from "react";
import LogoFacebook from "./LogoFacebook";
import SearchContact from "./SearchContact";
import { Link } from "react-router-dom";

const Search = () => {
  // Logo de la loupe
  const [logoLoupe, setLogoLoupe] = useState(
    <img src="./img/loupe.svg" width="20px" alt="" />
  );

  // Logo facebook
  const [logoFacebook, setlogoFacebook] = useState(
    <Link to="/" exact>
      <LogoFacebook />
    </Link>
  );

  // La popup qui apparait lorsqu'on commence a faire une recherche
  const popup = useRef(null);

  // Les listes de contacts
  const [contactList, setContactList] = useState([]);
  const [completeList, setCompleteList] = useState([]);

  // Contient ce que l'user tappe en recherche
  const [recherche, setRecherche] = useState("");

  /** On charge nos liste */
  useEffect(() => {
    setContactList((contact) => [...contact, "Chris"]);
    setContactList((contact) => [...contact, "Caro"]);
    setContactList((contact) => [...contact, "Chloe"]);
    setContactList((contact) => [...contact, "Bernard"]);
    setContactList((contact) => [...contact, "Lucie"]);
    setContactList((contact) => [...contact, "Nom Prénom"]);
    setContactList((contact) => [...contact, "Nom Prénom"]);
    setCompleteList((contact) => [...contact, "Chris"]);
    setCompleteList((contact) => [...contact, "Caro"]);
    setCompleteList((contact) => [...contact, "Chloe"]);
    setCompleteList((contact) => [...contact, "Bernard"]);
    setCompleteList((contact) => [...contact, "Lucie"]);
    setCompleteList((contact) => [...contact, "Nom Prénom"]);
    setCompleteList((contact) => [...contact, "Nom Prénom"]);
  }, []);

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

  /** Sortie de focus du champs de recherche */
  const sortieFocus = (e) => {
    e.target.style = "padding-left: 40px;";
    popup.current.style.display = "none";
    setLogoLoupe(<img src="./img/loupe.svg" width="20px" alt="" />);
    setlogoFacebook(<LogoFacebook />);
  };

  /** useEffect sur l'input pour rechercher dynamiquement dans la liste */
  useEffect(() => {
    if (recherche !== "") {
      const listtriee = completeList.filter((e) => {
        return e.toLowerCase().startsWith(recherche.toLowerCase());
      });
      setContactList(listtriee);
    } else {
      setContactList(completeList);
    }
  }, [recherche, completeList]);

  return (
    <div className="search">
      <div className="search__content">
        {logoFacebook}
        {logoLoupe}
        <input
          type="search"
          placeholder="Rechercher sur Facebook"
          onFocusCapture={priseFocus}
          onClick={priseFocus}
          onBlur={sortieFocus}
          onKeyUp={(e) => {
            if (e.key === "Escape") {
              setRecherche(e.target.value);
              sortieFocus(e);
            } else {
              setRecherche(e.target.value);
            }
          }}
        />
      </div>

      <div className="search__popup" ref={popup}>
        <div className="search__popup__btnBack">
          <svg viewBox="0 0 20 20" width="1.3em" height="1.3em">
            <g fill="#B0B3B8" transform="translate(-446 -350)">
              <g fill="#B0B3B8">
                <path
                  d="M100.249 201.999a1 1 0 0 0-1.415-1.415l-5.208 5.209a1 1 0 0 0 0 1.414l5.208 5.209A1 1 0 0 0 100.25 211l-4.501-4.501 4.5-4.501z"
                  transform="translate(355 153.5)"
                ></path>
                <path
                  d="M107.666 205.5H94.855a1 1 0 1 0 0 2h12.813a1 1 0 1 0 0-2z"
                  transform="translate(355 153.5)"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div className="search__popup__header">
          <span>Recherches récentes</span>
          <button>Modifier</button>
        </div>
        <div className="search__popup__content">
          {contactList.map((contact, i) => {
            return (
              <div className="contact_card" key={i}>
                <SearchContact nom={contact} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;

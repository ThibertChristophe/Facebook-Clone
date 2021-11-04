import React, { useState, useEffect, useRef } from "react";
import LogoFacebook from "./LogoFacebook";
import Button_circle from "./Button_circle";
import imgArrow from "../img/right-arrow.svg";
import SearchContact from "./SearchContact";

const Search = () => {
  const [logoLoupe, setLogoLoupe] = useState(
    <img src="./img/loupe.svg" width="20px" alt="" />
  );

  const [logoFacebook, setlogoFacebook] = useState(<LogoFacebook />);

  const popup = useRef(null);

  const [contactList, setContactList] = useState([]);
  const [completeList, setCompleteList] = useState([]);

  const [recherche, setRecherche] = useState("");

  useEffect(() => {
    setContactList((contact) => [...contact, "Chris"]);
    setContactList((contact) => [...contact, "Caro"]);
    setContactList((contact) => [...contact, "Chloe"]);
    setContactList((contact) => [...contact, "Nom Prénom"]);
    setContactList((contact) => [...contact, "Nom Prénom"]);
    setContactList((contact) => [...contact, "Nom Prénom"]);
    setContactList((contact) => [...contact, "Nom Prénom"]);
    setCompleteList((contact) => [...contact, "Chris"]);
    setCompleteList((contact) => [...contact, "Caro"]);
    setCompleteList((contact) => [...contact, "Chloe"]);
    setCompleteList((contact) => [...contact, "Nom Prénom"]);
    setCompleteList((contact) => [...contact, "Nom Prénom"]);
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

  const sortieFocus = (e) => {
    e.target.style = "padding-left: 40px;";
    popup.current.style.display = "none";
    setLogoLoupe(<img src="./img/loupe.svg" width="20px" alt="" />);
    setlogoFacebook(<LogoFacebook />);
  };

  useEffect(() => {
    if (recherche !== "") {
      const listtriee = completeList.filter((e) => {
        return e.toLowerCase().startsWith(recherche);
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
          placeholder="Rechercher sur Facebook "
          onFocusCapture={priseFocus}
          onBlur={sortieFocus}
          onKeyUp={(e) => {
            setRecherche(e.target.value);
          }}
        />
      </div>

      <div className="search__popup" ref={popup}>
        <div className="search__popup__btnBack">
          <Button_circle Icon={imgArrow} withoutOver="true" renverse />
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

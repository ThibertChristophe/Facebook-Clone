import React, { useState, useEffect } from "react";
import Button_circle from "./Button_circle";
import img_plus from "../img/plus.svg";
import img_messenger from "../img/messenger.svg";
import img_notif from "../img/bell.svg";
import img_arrow from "../img/down-arrow.svg";
import PopUp from "./PopUp";
import PopUpMenu from "./PopUpMenu";
import PopUpMessenger from "./PopUpMessenger";
import PopUpNotif from "./PopUpNotif";
import PopUpCompte from "./PopUpCompte";
import img_profil from "../img/profil.jpg";
import { NavLink } from "react-router-dom";

const Menu_Right = () => {
  const [pop, setPop] = useState("");
  const [whoisOpen, setWhoIsOpen] = useState("");

  // Detection de click sur la page en dehors des boutons du menu
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        e.target.className === "content-middle" ||
        e.target.className === "header"
      ) {
        setPop("");
        setWhoIsOpen("");
      }
    });
  });

  function openMenu() {
    if (whoisOpen === "menu") {
      setPop("");
      setWhoIsOpen("");
    } else {
      setWhoIsOpen("menu");
      setPop(
        <div>
          <PopUp content="menu" title="Créez">
            <PopUpMenu />
          </PopUp>
        </div>
      );
    }
  }

  function openMessenger() {
    if (whoisOpen === "messenger") {
      setPop("");
      setWhoIsOpen("");
    } else {
      setWhoIsOpen("messenger");
      setPop(
        <div>
          <PopUp content="messenger" title="Messenger">
            <PopUpMessenger />
          </PopUp>
        </div>
      );
    }
  }
  function openNotif() {
    if (whoisOpen === "notif") {
      setPop("");
      setWhoIsOpen("");
    } else {
      setWhoIsOpen("notif");
      setPop(
        <div>
          <PopUp content="notif" title="Notifications">
            <PopUpNotif />
          </PopUp>
        </div>
      );
    }
  }
  function openCompte() {
    if (whoisOpen === "compte") {
      setPop("");
      setWhoIsOpen("");
    } else {
      setWhoIsOpen("compte");
      setPop(
        <div>
          <PopUp content="compte">
            <PopUpCompte />
          </PopUp>
        </div>
      );
    }
  }
  return (
    <div>
      <div className="menu_right">
        <NavLink to="/Profil/" className="menu_right__profil menu_right__btn">
          <img src={img_profil} alt="image profil" />
          <span className="nom">Chris</span>
        </NavLink>
        <div className="menu_right__btn btnMenu" onClick={openMenu}>
          <Button_circle Icon={img_plus} type="add" withoutOver="true" />
          <div className="menu_right__menu__tooltip tooltip">Menu</div>
        </div>
        <div className="menu_right__btn btnMessenger" onClick={openMessenger}>
          <Button_circle
            Icon={img_messenger}
            type="messenger"
            withoutOver="true"
          />
          <div className="menu_right__messenger__tooltip tooltip">
            Messenger
          </div>
        </div>
        <div className="menu_right__btn btnNotif" onClick={openNotif}>
          <Button_circle Icon={img_notif} type="notif" withoutOver="true" />
          <div className="menu_right__notif__tooltip tooltip">
            Notifications
          </div>
        </div>
        <div className="menu_right__btn btnCompte" onClick={openCompte}>
          <Button_circle Icon={img_arrow} type="compte" withoutOver="true" />
          <div className="menu_right__compte__tooltip tooltip">Compte</div>
        </div>
      </div>
      {/* Sous-menu ici */}
      {pop}
    </div>
  );
};

export default Menu_Right;

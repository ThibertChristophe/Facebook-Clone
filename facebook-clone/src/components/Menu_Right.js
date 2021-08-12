import React, { useState } from "react";
import Button_circle from "./Button_circle";
import img_plus from "../img/plus.svg";
import img_messenger from "../img/messenger.svg";
import img_notif from "../img/bell.svg";
import img_arrow from "../img/down-arrow.svg";
import Button_profil from "./Button_profil";
import PopUp from "./PopUp";
import PopUpMenu from "./PopUpMenu";
import PopUpMessenger from "./PopUpMessenger";
import PopUpNotif from "./PopUpNotif";
import PopUpCompte from "./PopUpCompte";

const Menu_Right = () => {
  const [pop, setPop] = useState("");
  const [popupOpen, setPopupOpen] = useState([]);

  function openMenu() {
    if (pop !== "") {
      setPop("");
    } else {
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
    if (pop !== "") {
      setPop("");
    } else {
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
    if (pop !== "") {
      setPop("");
    } else {
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
    if (pop !== "") {
      setPop("");
    } else {
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
        <Button_profil Name="Chris" />
        <div onClick={openMenu}>
          <Button_circle Icon={img_plus} type="add" />
        </div>
        <div onClick={openMessenger}>
          <Button_circle Icon={img_messenger} type="messenger" />
        </div>
        <div onClick={openNotif}>
          <Button_circle Icon={img_notif} type="notif" />
        </div>
        <div onClick={openCompte}>
          <Button_circle Icon={img_arrow} type="compte" />
        </div>
      </div>
      {/* Sous-menu ici */}
      {pop}
    </div>
  );
};

export default Menu_Right;

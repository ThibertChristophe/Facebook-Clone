import React, { useState, useEffect } from "react";
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

  // Detection de click sur la page en dehors des boutons du menu
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        e.target.className === "content-middle" ||
        e.target.className === "header"
      ) {
        setPop("");
      }
    });
  });

  function openMenu() {
    setPop(
      <div>
        <PopUp content="menu" title="Créez">
          <PopUpMenu />
        </PopUp>
      </div>
    );
  }

  function openMessenger() {
    setPop(
      <div>
        <PopUp content="messenger" title="Messenger">
          <PopUpMessenger />
        </PopUp>
      </div>
    );
  }
  function openNotif() {
    setPop(
      <div>
        <PopUp content="notif" title="Notifications">
          <PopUpNotif />
        </PopUp>
      </div>
    );
  }
  function openCompte() {
    setPop(
      <div>
        <PopUp content="compte">
          <PopUpCompte />
        </PopUp>
      </div>
    );
  }
  return (
    <div>
      <div className="menu_right">
        <Button_profil Name="Chris" />
        <div onClick={openMenu}>
          <Button_circle Icon={img_plus} type="add" withoutOver="true" />
        </div>
        <div onClick={openMessenger}>
          <Button_circle
            Icon={img_messenger}
            type="messenger"
            withoutOver="true"
          />
        </div>
        <div onClick={openNotif}>
          <Button_circle Icon={img_notif} type="notif" withoutOver="true" />
        </div>
        <div onClick={openCompte}>
          <Button_circle Icon={img_arrow} type="compte" withoutOver="true" />
        </div>
      </div>
      {/* Sous-menu ici */}
      {pop}
    </div>
  );
};

export default Menu_Right;

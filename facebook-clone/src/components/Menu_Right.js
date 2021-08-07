import React, { useState } from "react";
import Button_circle from "./Button_circle";
import img_plus from "../img/plus.svg";
import img_messenger from "../img/messenger.svg";
import img_notif from "../img/bell.svg";
import img_arrow from "../img/down-arrow.svg";
import Button_profil from "./Button_profil";
import PopUp from "./PopUp";

const Menu_Right = () => {
  const [pop, setPop] = useState("");
  const [popupOpen, setPopupOpen] = useState([]);

  function openMenu() {
    if (pop !== "") {
      setPop("");
    } else {
      setPop(
        <div>
          <PopUp content="menu" title="Créez" />
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
          <PopUp content="messenger" title="Messenger" />
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

        <Button_circle Icon={img_notif} type="notif" />
        <Button_circle Icon={img_arrow} type="compte" />
      </div>
      {/* Sous-menu ici */}
      {pop}
    </div>
  );
};

export default Menu_Right;

import React from "react";
import Button_circle from "./Button_circle";
import img_plus from "../img/plus.svg";
import img_messenger from "../img/messenger.svg";
import img_notif from "../img/bell.svg";
import img_arrow from "../img/down-arrow.svg";
import Button_profil from "./Button_profil";

const Menu_Right = () => {
  return (
    <div className="menu_right">
      <Button_profil Name="Chris" />
      <Button_circle Icon={img_plus} add />
      <Button_circle Icon={img_messenger} />
      <Button_circle Icon={img_notif} />
      <Button_circle Icon={img_arrow} />
    </div>
  );
};

export default Menu_Right;

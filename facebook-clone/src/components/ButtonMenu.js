import React from "react";
import Button_circle from "./Button_circle";

const ButtonMenu = ({ img, title, desc }) => {
  return (
    <div className="btn-menu">
      <div className="btn-menu-img">
        <Button_circle Icon={img} />
      </div>
      <div className="btn-menu-text">
        <div className="btn-menu-text-title">{title}</div>
        <div className="btn-menu-text-subText">{desc}</div>
      </div>
    </div>
  );
};

export default ButtonMenu;

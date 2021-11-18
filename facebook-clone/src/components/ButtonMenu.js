import React from "react";
import Button_circle from "./Button_circle";

const ButtonMenu = ({ img, title, desc, deco }) => {
  function handleClick() {
    if (deco) {
      localStorage.setItem("connected", false);
    }
  }

  return (
    <div className="btn-menu" onClick={handleClick}>
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

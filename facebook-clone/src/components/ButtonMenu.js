import React from "react";
import Button_circle from "./Button_circle";

const ButtonMenu = ({ img, title, desc, deco }) => {
  function handleClick() {
    if (deco) {
      localStorage.setItem("connected", false);
    }
  }

  return (
    <form className="btn-menu">
      <button onClick={handleClick}>
        <div className="btn-menu-img">
          <Button_circle Icon={img} />
        </div>
        <div className="btn-menu-text">
          <div className="btn-menu-text-title">{title}</div>
          <div className="btn-menu-text-subText">{desc}</div>
        </div>
      </button>
    </form>
  );
};

export default ButtonMenu;

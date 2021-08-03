import React from "react";
import Button_circle from "./Button_circle";

const ButtonMenu = (props) => {
  return (
    <div className="btn-menu">
      <div className="btn-menu-img">
        <Button_circle Icon={props.img} />
      </div>
      <div className="btn-menu-text">
        <div className="btn-menu-text-title">{props.title}</div>
        <div className="btn-menu-text-subText">{props.desc}</div>
      </div>
    </div>
  );
};

export default ButtonMenu;

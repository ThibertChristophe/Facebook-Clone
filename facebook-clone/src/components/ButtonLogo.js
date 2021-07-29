import React from "react";

const ButtonLogo = (props) => {
  const listClass = "buttonLogo-img " + props.classe;
  return (
    <div className="buttonLogo">
      <div className={listClass}></div>
      <span>{props.title}</span>
    </div>
  );
};

export default ButtonLogo;

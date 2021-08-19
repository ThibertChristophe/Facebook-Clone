import React from "react";

const Button_circle = ({ Icon, withoutOver }) => {
  return (
    <div className="button_circle">
      <button className={withoutOver ? "withOver" : ""}>
        <img src={Icon} alt="" />
      </button>
    </div>
  );
};

export default Button_circle;

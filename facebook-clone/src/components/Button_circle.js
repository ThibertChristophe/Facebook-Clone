import React from "react";

const Button_circle = (Icon) => {
  console.log(Icon.Icon);
  return (
    <div className="button_circle">
      <button>
        <img src={Icon.icon} alt="" />
      </button>
    </div>
  );
};

export default Button_circle;

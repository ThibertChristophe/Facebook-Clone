import React from "react";

const Button_circle = (Icon) => {
  return (
    <div className="button_circle">
      <button>
        <img src={Icon.Icon} alt="" />
      </button>
    </div>
  );
};

export default Button_circle;

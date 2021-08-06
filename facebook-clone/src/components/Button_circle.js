import React from "react";

const Button_circle = (props) => {
  return (
    <div className="button_circle">
      <button>
        <img src={props.Icon} alt="" />
      </button>
    </div>
  );
};

export default Button_circle;

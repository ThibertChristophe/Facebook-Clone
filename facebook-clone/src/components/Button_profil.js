import React from "react";
import img_profil from "../img/profil.jpg";

const Button_profile = (props) => {
  return (
    <div className="button_profile">
      <img src={img_profil} alt="image profil" />
      <span className="nom">{props.Name}</span>
    </div>
  );
};

export default Button_profile;

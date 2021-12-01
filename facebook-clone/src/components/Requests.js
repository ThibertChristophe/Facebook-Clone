import React from "react";
import noPeople from "../img/null_states_people_dark_mode.svg";

const Requests = () => {
  return (
    <div className="requests">
      <div className="requests__content">
        <img src={noPeople} alt="" />
        <div>
          Sélectionnez des noms de personnes pour avoir un aperçu de leur
          profil.
        </div>
      </div>
    </div>
  );
};

export default Requests;

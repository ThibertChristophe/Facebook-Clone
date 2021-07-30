import React from "react";

const Raccourcis = (props) => {
  return (
    <div className="raccourcis">
      <img className="raccourcis-img" src={props.img} />
      <div className="raccourcis-libelle">NodeJS Developers</div>
    </div>
  );
};

export default Raccourcis;

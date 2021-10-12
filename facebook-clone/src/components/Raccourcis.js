import React from "react";

const Raccourcis = ({ img, title }) => {
  return (
    <div className="raccourcis">
      <img className="raccourcis-img" src={img} />
      <div className="raccourcis-libelle">{title}</div>
    </div>
  );
};

export default Raccourcis;

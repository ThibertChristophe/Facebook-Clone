import React from "react";
import imgSponso from "../img/sponso.jpg";

const WidgetSponsor = () => {
  return (
    <div className="widget-sponsors">
      <p>Sponsorisé</p>
      <div className="widget-sponso-list">
        <div className="widget-sponso-card">
          <img src={imgSponso} alt="" />
          <div className="widget-sponso-card-text">
            <p className="titre">Titre sponso</p>
            <p className="site">www.site.be</p>
          </div>
        </div>
        <div className="widget-sponso-card">
          <img src={imgSponso} alt="" />
          <div className="widget-sponso-card-text">
            <p className="titre">Titre sponso</p>
            <p className="site">www.site.be</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetSponsor;

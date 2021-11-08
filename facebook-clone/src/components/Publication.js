import React from "react";
import WhatNew from "./WhatNew";

const Publication = () => {
  return (
    <div className="publication">
      <div className="publication__right ">
        <div className="publication__right__intro box">
          <h2>Intro</h2>
          <div className="publication__right__intro__action">
            <div className="btn">
              <span>Ajouter une bio</span>
            </div>
            <div className="btn">
              <span>Modifier les infos</span>
            </div>
            <div className="btn">
              <span>Ajouter des loisirs</span>
            </div>
            <div className="btn">
              <span>Ajouter du contenu à la une</span>
            </div>
          </div>
        </div>
        <div className="box publication__right__photos">
          <h2>Photos</h2>
        </div>
        <div className="box publication__right__amis">
          <h2>Amis</h2>
        </div>
      </div>
      <div className="publication__left ">
        <div className="publication__left__whatnew box">
          <WhatNew />
        </div>
        <div className="box publication__left__public">
          <h2>Publications</h2>
        </div>
      </div>
    </div>
  );
};

export default Publication;

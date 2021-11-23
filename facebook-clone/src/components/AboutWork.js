import React from "react";

const AboutWork = () => {
  return (
    <div className="aboutWork">
      <div className="aboutWork__emploi">
        <h2>Emploi</h2>
        <div className="aboutWork__emploi__card">
          <div className="aboutWork__emploi__img"></div>
          <div className="aboutWork__emploi__content">
            <div>Software Engineer</div>
            <div className="aboutWork__emploi__content__time">depuis ...</div>
          </div>
          <div className="aboutWork__emploi__option">
            <div className="aboutWork__emploi__option__friends"></div>
            <div className="aboutWork__emploi__option__plus">...</div>
          </div>
        </div>
      </div>
      <h2>Université</h2>
      <h2>Collège/lycée</h2>
    </div>
  );
};

export default AboutWork;

import React from "react";
import friends from "../img/amis-small.png";

const AboutWork = () => {
  return (
    <div className="aboutWork">
      <div className="aboutWork__section">
        <h2>Emploi</h2>
        <div className="aboutWork__card">
          <div className="aboutWork__card__img"></div>
          <div className="aboutWork__card__content">
            <div>Software Engineer</div>
            <div className="aboutWork__card__content__time">
              at Google pizza
            </div>
          </div>
          <div className="aboutWork__card__option">
            <div className="aboutWork__card__option__friends">
              <img src={friends} alt="" />
            </div>
            <div className="aboutWork__card__option__plus">...</div>
          </div>
        </div>
      </div>
      <div className="aboutWork__section">
        <h2>Université</h2>
        <div className="aboutWork__card">
          <div className="aboutWork__card__img"></div>
          <div className="aboutWork__card__content">
            <div>University of Newton</div>
            <div className="aboutWork__card__content__time">
              from 1950 to 1960
            </div>
          </div>
          <div className="aboutWork__card__option">
            <div className="aboutWork__card__option__friends">
              <img src={friends} alt="" />
            </div>
            <div className="aboutWork__card__option__plus">...</div>
          </div>
        </div>
      </div>
      <div className="aboutWork__section">
        <h2>Collège/lycée</h2>
        <div className="aboutWork__card">
          <div className="aboutWork__card__img"></div>
          <div className="aboutWork__card__content">
            <div>College of bridge</div>
            <div className="aboutWork__card__content__time">
              from 1940 to 1945
            </div>
          </div>
          <div className="aboutWork__card__option">
            <div className="aboutWork__card__option__friends">
              <img src={friends} alt="" />
            </div>
            <div className="aboutWork__card__option__plus">...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWork;

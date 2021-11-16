import React from "react";
import home from "../img/home.png";
import localisation from "../img/localisation.png";
import coeur from "../img/coeur.png";
import phone from "../img/phone-grey.png";
import friends from "../img/amis-small.png";

const Overview = () => {
  return (
    <div className="overview">
      <ul>
        <li>
          <span>Lieu de travail</span>
        </li>
        <li>
          <span>Lycée</span>
        </li>
        <li>
          <span>Université</span>
        </li>
        <li>
          <div className="overview__liRight">
            <img src={home} />
            <span>Habite à</span>
          </div>
          <div className="overview__liLeft">
            <div className="overview__liLeft__friends">
              <img
                className="overview__liLeft__friends__friendsImg"
                src={friends}
                alt=""
              />
            </div>
            <div className="overview__liLeft__more">...</div>
          </div>
        </li>
        <li>
          <div className="overview__liRight">
            <img src={localisation} />
            <span>De Bruxelles</span>
          </div>
          <div className="overview__liLeft">
            <div className="overview__liLeft__friends">
              <img
                className="overview__liLeft__friends__friendsImg"
                src={friends}
                alt=""
              />
            </div>
            <div className="overview__liLeft__more">...</div>
          </div>
        </li>
        <li>
          <div className="overview__liRight">
            <img src={coeur} />
            <span>Marié(e)</span>
          </div>
          <div className="overview__liLeft">
            <div className="overview__liLeft__friends">
              <img
                className="overview__liLeft__friends__friendsImg"
                src={friends}
                alt=""
              />
            </div>
            <div className="overview__liLeft__more">...</div>
          </div>
        </li>
        <li>
          <div className="overview__liRight">
            <img src={phone} />
            <span>0477 11 11 11</span>
          </div>
          <div className="overview__liLeft">
            <div className="overview__liLeft__friends">
              <img
                className="overview__liLeft__friends__friendsImg"
                src={friends}
                alt=""
              />
            </div>
            <div className="overview__liLeft__more">...</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Overview;

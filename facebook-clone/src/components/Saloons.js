import React, { useState } from "react";
import Button_circle from "./Button_circle";
import imgArrow from "../img/next.svg";

const Saloons = () => {
  const [classlist, setClasslist] = useState("listContact");

  function clickNext() {
    setClasslist("listContact defille");
    document.querySelector(".saloons-btn-next").classList.toggle("hide");
    document.querySelector(".saloons-btn-previous").classList.toggle("show");
  }

  return (
    <div className="saloons">
      <div className="saloons-btn-previous">
        <Button_circle Icon={imgArrow} withoutOver="true" renverse />
      </div>
      <div className={classlist}>
        <div className="createSaloon">
          <button>
            <span className="camera"></span>Créer un salon
          </button>
        </div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        {/* depasse*/}
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
      </div>
      <div className="saloons-btn-next" onClick={clickNext}>
        <Button_circle Icon={imgArrow} withoutOver="true" />
      </div>
    </div>
  );
};

export default Saloons;

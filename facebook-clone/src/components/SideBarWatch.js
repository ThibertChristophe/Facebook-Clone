import React from "react";

const SideBarWatch = () => {
  return (
    <div className="sideBarWatch">
      <div className="sideBarWatch__header">
        <div className="sideBarWatch__header__titre">
          <h2>Watch</h2>
          <div className="ecrouFond">
            <span className="ecrou"></span>
          </div>
        </div>
        <div className="sideBarWatch__header__input">
          <div className="loupe"></div>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default SideBarWatch;

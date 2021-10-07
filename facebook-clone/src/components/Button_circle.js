import React, { useState, useEffect } from "react";

const Button_circle = ({ Icon, withoutOver, renverse }) => {
  const [listofClass, setListofClass] = useState();

  useEffect(() => {
    let listC;
    if (withoutOver === "true") {
      listC = "withOver";
    }
    if (renverse) {
      listC += " renverse";
    }
    setListofClass(listC);
  });

  return (
    <div className="button_circle">
      <button className={listofClass}>
        <img src={Icon} alt="" />
      </button>
    </div>
  );
};

export default Button_circle;

import React, { useState, useEffect } from "react";

const Button_circle = ({ Icon, withoutOver, renverse }) => {
  const [listofClass, setListofClass] = useState();

  useEffect(() => {
    let listC;
    if (withoutOver === "true") {
      listC += "withOver";
    }
    if (renverse) {
      listC += " renverse";
    }
    setListofClass(listC);
  }, [withoutOver, renverse]);

  return (
    <div className="button_circle">
      <div className={"circle-btn " + listofClass}>
        <img src={Icon} alt="" />
      </div>
    </div>
  );
};

export default Button_circle;

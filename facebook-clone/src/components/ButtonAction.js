import React, { useState, useEffect } from "react";

const ButtonAction = ({ title, bleu, small }) => {
  const [colorBlue, setcolorBlue] = useState("");
  const [taille, setTaille] = useState("buttonAction");
  let listClass = "contain";

  useEffect(() => {
    if (bleu) {
      listClass += " bleu";
    }
    if (small) {
      setTaille("buttonAction small");
    }
    setcolorBlue(listClass);
  });

  return (
    <>
      <div className={taille}>
        <button className={colorBlue}>{title}</button>
      </div>
    </>
  );
};

export default ButtonAction;

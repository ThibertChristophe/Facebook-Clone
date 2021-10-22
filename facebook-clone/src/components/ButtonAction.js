import React, { useState, useEffect, useRef } from "react";

const ButtonAction = ({ title, bleu, small }) => {
  const [colorBlue, setcolorBlue] = useState("");
  const [taille, setTaille] = useState("buttonAction");
  let listClass = useRef("contain");

  useEffect(() => {
    if (bleu) {
      listClass.current += " bleu";
    }
    if (small) {
      setTaille("buttonAction small");
    }
    setcolorBlue(listClass.current);
  }, [bleu, small]);

  return (
    <>
      <div className={taille}>
        <button className={colorBlue}>{title}</button>
      </div>
    </>
  );
};

export default ButtonAction;

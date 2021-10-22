import React, { useState, useEffect, useRef } from "react";

const ButtonAction = ({ title, bleu, small, img }) => {
  const [colorBlue, setcolorBlue] = useState("");
  const [taille, setTaille] = useState("buttonAction");
  let listClass = useRef("contain");

  function displayImg() {
    if (img) {
      return <img src={img} alt="" />;
    }
  }

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
        <button className={colorBlue}>
          {displayImg()}
          {title}
        </button>
      </div>
    </>
  );
};

export default ButtonAction;

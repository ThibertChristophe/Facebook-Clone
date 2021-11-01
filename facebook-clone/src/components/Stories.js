import React from "react";
import Story from "./Story";
import imgProfil from "../img/profil.jpg";
import imgElon from "../img/elon_musk.JPG";
import imgAlbert from "../img/einstein.JPG";
import imgBill from "../img/bill_gate.JPG";
import imgBarack from "../img/barack.JPG";
import Button_circle from "./Button_circle";
import imgArrow from "../img/right-arrow.svg";

const Stories = () => {
  return (
    <div className="stories">
      <Story title="Créer une story" first mini={imgProfil} />
      <Story title="Elon Musk" mini={imgElon} />
      <Story title="Albert Einstein" mini={imgAlbert} />
      <Story title="Bill Gates" mini={imgBill} />
      <Story title="Barack Obama" mini={imgBarack} />
      <Story title="Monsieur Mystère" mini="" />
      <div className="stories-btn-next">
        <Button_circle Icon={imgArrow} withoutOver="true" />
      </div>
    </div>
  );
};

export default Stories;

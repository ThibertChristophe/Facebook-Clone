import React from "react";
import Story from "./Story";
import imgProfil from "../img/profil.jpg";
import imgElon from "../img/elon_musk.JPG";
import imgSteve from "../img/steve_jobs.JPG";
import imgAlbert from "../img/einstein.JPG";
import imgBill from "../img/bill_gate.JPG";
import imgBarack from "../img/barack.JPG";
import Button_circle from "./Button_circle";
import imgArrow from "../img/right-arrow.svg";

const Stories = () => {
  return (
    <div className="stories">
      <Story title="Chris Thib" mini={imgProfil} />
      <Story title="Elon Musk" mini={imgElon} />
      <Story title="Steve Jobs" img={imgSteve} mini={imgSteve} />
      <Story title="Albert Einstein" img={imgAlbert} mini={imgAlbert} />
      <Story title="Bill Gates" img={imgBill} mini={imgBill} />
      <Story title="Barack Obama" img={imgBarack} mini={imgBarack} />
      <div className="stories-btn-next">
        <Button_circle Icon={imgArrow} />
      </div>
    </div>
  );
};

export default Stories;

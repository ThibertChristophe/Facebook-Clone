import React, { useEffect, useState } from "react";
import Story from "./Story";
import imgProfil from "../img/profil.jpg";
import imgElon from "../img/elon_musk.JPG";
import imgAlbert from "../img/einstein.JPG";
import imgBill from "../img/bill_gate.JPG";
import imgBarack from "../img/barack.JPG";
import Button_circle from "./Button_circle";
import imgArrow from "../img/right-arrow.svg";

const Stories = () => {
  const [listStory, setListStory] = useState([]);

  useEffect(() => {
    // On créé notre liste de story
    setListStory([]);
    setListStory((listStory) => [
      ...listStory,
      { name: "Elon Musk", img: imgElon },
    ]);
    setListStory((listStory) => [
      ...listStory,
      { name: "Albert Einstein", img: imgAlbert },
    ]);
    setListStory((listStory) => [
      ...listStory,
      { name: "Bill Gates", img: imgBill },
    ]);
    setListStory((listStory) => [
      ...listStory,
      { name: "Barack Obama", img: imgBarack },
    ]);
    setListStory((listStory) => [...listStory, { name: "Monsieur Mystère" }]);
  }, []);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1450 && listStory.length === 5) {
      // setListStory(listStory.slice(0, listStory.length - 1));
    }
  });

  return (
    <div className="stories">
      <Story title="Créer une story" first mini={imgProfil} />
      {/*List de story*/}
      {listStory.map((story, index) => (
        <Story title={story.name} mini={story.img} key={index} />
      ))}
      <div className="stories-btn-next">
        <Button_circle Icon={imgArrow} withoutOver="true" />
      </div>
    </div>
  );
};

export default Stories;

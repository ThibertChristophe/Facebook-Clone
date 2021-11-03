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
  const [listComplete, setListComplete] = useState([]);

  const [move, setMove] = useState(0);

  /**
   * Crée les stories
   */
  function getStories() {
    // Endroit où fetch sur l'api
    setListStory([]);

    setListStory((current) => [
      ...current,
      { name: "Elon Musk", img: imgElon },
    ]);

    setListStory((current) => [
      ...current,
      { name: "Albert Einstein", img: imgAlbert },
    ]);

    setListStory((current) => [
      ...current,
      { name: "Bill Gates", img: imgBill },
    ]);

    setListStory((current) => [
      ...current,
      { name: "Barack Obama", img: imgBarack },
    ]);

    setListStory((current) => [...current, { name: "Monsieur Mystère" }]);
    //////////////
    setListComplete([]);
    setListComplete((current) => [
      ...current,
      { name: "Elon Musk", img: imgElon },
    ]);

    setListComplete((current) => [
      ...current,
      { name: "Albert Einstein", img: imgAlbert },
    ]);

    setListComplete((current) => [
      ...current,
      { name: "Bill Gates", img: imgBill },
    ]);

    setListComplete((current) => [
      ...current,
      { name: "Barack Obama", img: imgBarack },
    ]);

    setListComplete((current) => [...current, { name: "Monsieur Mystère" }]);
  }

  /**
   * Copie intacte
   */
  useEffect(() => {
    // On créé notre liste de story complete
    getStories();
  }, []);

  /** Listener de Resize */
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMove(window.innerWidth);
    });
  }, []);

  /** Responsive */
  useEffect(() => {
    if (move < 1450 && listStory.length === 5) {
      setListStory(listComplete.slice(0, listComplete.length - 1));
      return;
    }
    if (move < 1170 && listStory.length === 4) {
      setListStory(listComplete.slice(0, listComplete.length - 2));
      return;
    }

    if (move > 1170 && listStory.length === 3) {
      setListStory(listComplete.slice(0, listComplete.length - 1));
      return;
    }
    if (move > 1450 && listStory.length === 4) {
      setListStory(listComplete.slice());
      return;
    }
  }, [move]);

  return (
    <div className="stories">
      <div className="stories__card">
        <Story title="Créer une story" first mini={imgProfil} />
      </div>

      {/*List de story*/}
      {listStory.map((story, index) => (
        <div className="stories__card" key={index}>
          <Story title={story.name} mini={story.img} />
        </div>
      ))}
      <div className="stories-btn-next">
        <Button_circle Icon={imgArrow} withoutOver="true" />
      </div>
    </div>
  );
};

export default Stories;

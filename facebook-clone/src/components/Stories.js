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

  const [move, setMove] = useState(window.innerWidth);

  /**
   * Crée les stories
   */
  function getStories() {
    // Endroit où fetch sur l'api
    setListStory([]);
    setListComplete([]);
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
    return true;
  }

  /**
   * useEffect au chargement
   */
  useEffect(() => {
    // On créé notre liste de story
    if (getStories()) {
      setListComplete((listComplete) => [
        ...listComplete,
        { name: "Elon Musk", img: imgElon },
      ]);
      setListComplete((listComplete) => [
        ...listComplete,
        { name: "Albert Einstein", img: imgAlbert },
      ]);
      setListComplete((listComplete) => [
        ...listComplete,
        { name: "Bill Gates", img: imgBill },
      ]);
      setListComplete((listComplete) => [
        ...listComplete,
        { name: "Barack Obama", img: imgBarack },
      ]);
      setListComplete((listComplete) => [
        ...listComplete,
        { name: "Monsieur Mystère" },
      ]);
    }
  }, []);

  /** Listener de Resize */
  useEffect(() => {
    function handleResize() {
      setMove(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /** Responsive */
  useEffect(() => {
    if (move < 1450 && listStory.length === 5) {
      setListStory(listStory.slice(0, listStory.length - 1));
      return;
    }
    if (move < 1170 && listStory.length === 4) {
      setListStory(listStory.slice(0, listStory.length - 1));
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

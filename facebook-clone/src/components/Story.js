import React from "react";
import imgPlus from "../img/plus.svg";

const Story = (props) => {
  /**
   * Si c'est la première story
   * On affiche avec la croix d'ajout
   * On centre le texte
   * @returns
   */
  function displayFirst() {
    if (props.first === true) {
      // Ajout du bouton d'ajout
      return (
        <div className="story-btnAdd">
          <img src={imgPlus} alt="" />
        </div>
      );
    } else {
      return (
        <div className="img-mini">
          <img src={props.mini} alt="" />
        </div>
      );
    }
  }

  function displayTitle() {
    if (props.first === true) {
      // plus petite police et centré
      return <span className="story-title-first">{props.title}</span>;
    } else {
      return <span>{props.title}</span>;
    }
  }

  function displayImg() {
    if (props.img !== undefined) {
      return <img src={props.img} alt="" />;
    }
  }
  return (
    <div className="story">
      {displayFirst()}
      <div className="fond" alt="">
        {displayImg()}
      </div>
      {displayTitle()}
    </div>
  );
};

export default Story;

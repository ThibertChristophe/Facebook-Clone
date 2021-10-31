import React, { useState, useEffect } from "react";

const ButtonPost = (props) => {
  const [actif, setActif] = useState("");
  const [move, setMove] = useState("");

  useEffect(() => {
    if (props.active === true) {
      setActif("active-btn");
      setMove("active-img");
    } else {
      setActif("");
      setMove("");
    }
  }, [props.active]);

  /**
   * Change le libelle et l'image en fonction du type de bouton
   */
  function displayBtn() {
    switch (props.type) {
      case "like":
        return (
          <div>
            <span className={"posts-footer-btn-like " + move}></span>
            <span className={"no-select " + actif}>J'aime</span>
          </div>
        );
      case "comment":
        return (
          <div>
            <span className="posts-footer-btn-comment"></span>
            <span className="no-select">Commenter</span>
          </div>
        );
      case "share":
        return (
          <div>
            <span className="posts-footer-btn-share"></span>
            <span className="no-select">Partager</span>
          </div>
        );
      default:
        return;
    }
  }

  return <div className="btn-post active-btn">{displayBtn()}</div>;
};

export default ButtonPost;

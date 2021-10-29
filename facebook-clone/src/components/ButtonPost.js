import React from "react";

const ButtonPost = (props) => {
  /**
   * Change le libelle et l'image en fonction du type de bouton
   */
  function displayBtn() {
    switch (props.type) {
      case "like":
        return (
          <div>
            <span className="posts-footer-btn-like"></span>
            <span className="no-select">J'aime</span>
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

  return <div className="btn-post">{displayBtn()}</div>;
};

export default ButtonPost;

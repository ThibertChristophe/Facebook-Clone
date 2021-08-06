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
            <span>J'aime</span>
          </div>
        );
      case "comment":
        return (
          <div>
            <span className="posts-footer-btn-comment"></span>
            <span>Commenter</span>
          </div>
        );
      case "share":
        return (
          <div>
            <span className="posts-footer-btn-share"></span>
            <span>Partager</span>
          </div>
        );
      default:
        return;
    }
  }

  return <div className="btn-post">{displayBtn()}</div>;
};

export default ButtonPost;

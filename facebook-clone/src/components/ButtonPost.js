import React, { useState, useEffect } from "react";

const ButtonPost = (props) => {
  const [classA, setClassA] = useState("");
  const [libelle, setLibelle] = useState("");

  useEffect(() => {
    switch (props.type) {
      case "like":
        setClassA("posts-footer-btn-like");
        setLibelle("J'aime");
        break;
      case "comment":
        setClassA("posts-footer-btn-comment");
        setLibelle("Commenter");
        break;
      case "share":
        setClassA("posts-footer-btn-share");
        setLibelle("Partager");
        break;
      default:
        break;
    }
  });

  return (
    <div className="btn-post">
      <span className={classA}></span>
      {libelle}
    </div>
  );
};

export default ButtonPost;

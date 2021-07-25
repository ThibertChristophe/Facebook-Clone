import React, { useState } from "react";

const Article = (props) => {
  const [titre, setTitre] = useState("");

  const { article } = props;

  const ajouteTitre = () => {
    if (titre === "") {
      setTitre(article);
    } else {
      setTitre("");
    }
  };

  return (
    <div className="article">
      {titre}
      <div>
        <button onClick={ajouteTitre}>GO click</button>
      </div>
    </div>
  );
};

export default Article;

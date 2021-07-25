import React, { useState } from "react";

const Article = () => {
  const [titre, setTitre] = useState("");

  const ajouteTitre = () => {
    if (titre === "") {
      setTitre("Titre est là");
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

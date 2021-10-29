import React, { useState, useEffect } from "react";

export default function Comment({ content, time }) {
  const [commentaire, setCommentaire] = useState("");
  const [timing, setTiming] = useState("");

  useEffect(() => {
    if (content === "" || content === undefined) {
      setCommentaire("Voici mon commentaire");
    } else {
      setCommentaire(content);
    }

    if (time === "" || time === undefined) {
      setTiming("4h");
    } else {
      setTiming("A l'instant");
    }
  }, []);

  return (
    <div className="comment">
      <div className="comment__profil"></div>
      <div className="comment__contentRight">
        <div className="comment__nameComment">
          <div className="comment__nameComment__name">Nom Prénom</div>
          <div className="comment__nameComment__comment">{commentaire}</div>
        </div>
        <div className="comment__contentRight__footer">
          <ul>
            <li>
              <span>J'aime</span>
            </li>
            <li>
              <span>Répondre</span>
            </li>
            <li>
              <span>{timing}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="comment__btn">...</div>
    </div>
  );
}

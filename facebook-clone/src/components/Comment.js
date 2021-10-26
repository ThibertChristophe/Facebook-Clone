import React from "react";

export default function Comment() {
  return (
    <div className="comment">
      <div className="comment__profil"></div>
      <div className="comment__contentRight">
        <div className="comment__nameComment">
          <div className="comment__nameComment__name">Nom Prénom</div>
          <div className="comment__nameComment__comment">
            Voici mon commentaire
          </div>
        </div>
        <div className="comment__contentRight__footer">
          <ul>
            <li>J'aime</li>
            <li>Répondre</li>
            <li>4h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

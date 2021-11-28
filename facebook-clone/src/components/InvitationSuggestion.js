import React, { useState, useEffect } from "react";

const InvitationSuggestion = () => {
  const [listeAmis, setListeAmis] = useState([]);

  useEffect(() => {
    const tabAmi = [];
    tabAmi.push("Amis");
    tabAmi.push("Amis");
    tabAmi.push("Amis");
    setListeAmis(tabAmi);
  }, []);
  return (
    <div className="invitationSuggestion">
      <div className="invitationSuggestion__invitations">
        <div className="invitationSuggestion__invitations__header">
          <h2>Invitations</h2>
          <button className="seeAll">Voir tout</button>
        </div>
        <div className="invitationSuggestion__invitations__content">
          <div className="invitationSuggestion__card">
            <div className="card__img"></div>
            <div className="card__bot">
              <div className="card__data">
                <div className="card__name">Nom Prénom</div>
                <div>2 amis en commun</div>
              </div>
              <div>
                <div>
                  <button className="btn-confirm">Confirmer</button>
                </div>
                <div>
                  <button className="btn-delete">Supprimer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**======================= SUGGESTION ======================== */}
      <div className="invitationSuggestion__maybe">
        <div className="">
          <div className="invitationSuggestion__maybe__header">
            <h2>Vous connaissez peut-être</h2>
            <button className="seeAll">Voir tout</button>
          </div>
          <div className="invitationSuggestion__maybe__content">
            {listeAmis.map((nom, index) => {
              return (
                <div className="invitationSuggestion__card" key={index}>
                  <div className="card__img"></div>
                  <div className="card__bot">
                    <div className="card__data">
                      <div className="card__name">Nom Prénom</div>
                      <div>2 amis en commun</div>
                    </div>
                    <div>
                      <div>
                        <button className="btn-confirm clair">Ajouter</button>
                      </div>
                      <div>
                        <button className="btn-delete">Supprimer</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationSuggestion;

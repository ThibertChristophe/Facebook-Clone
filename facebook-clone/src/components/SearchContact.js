import React, { useState, useEffect } from "react";

function SearchContact({ nom }) {
  const [nomPrenom, setNomPrenom] = useState("Nom Prénom");

  useEffect(() => {
    if (nom !== "") {
      setNomPrenom(nom);
    }
  }, [nom]);

  return (
    <div className="searchContact">
      <div className="searchContact__imgLibelle">
        <div className="searchContact__profil"></div>
        <div className="searchContact__libelle">{nomPrenom}</div>
      </div>

      <div className="searchContact__btnClose">
        <button></button>
      </div>
    </div>
  );
}

export default SearchContact;

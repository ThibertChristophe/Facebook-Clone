import React from "react";
import ButtonMenu from "./ButtonMenu";
import imgEdit from "../img/edit.svg";
import imgBook from "../img/book.svg";
import imgStar from "../img/star.svg";
import imgChat from "../img/chat.svg";

const PopUp = () => {
  return (
    <div className="popup">
      <h1>Créer</h1>
      <ButtonMenu
        title="Publication"
        desc="Partagez une publication sur le fil d'actualité."
        img={imgEdit}
      />
      <ButtonMenu
        title="Story"
        desc="Partagez une photo ou un message."
        img={imgBook}
      />
      <ButtonMenu
        title="Évènement marquant"
        desc="Ajoutez un évènement marquant sur votre profil."
        img={imgStar}
      />
      <ButtonMenu
        title="Publier sur le groupe"
        desc="Partagez une publication dans votre groupe."
        img={imgChat}
      />
    </div>
  );
};

export default PopUp;

import React from "react";
import ButtonMenu from "./ButtonMenu";
import imgEdit from "../img/edit.svg";
import imgBook from "../img/book.svg";
import imgStar from "../img/star.svg";
import imgChat from "../img/chat.svg";
import imgFlag from "../img/flag.svg";
import imgMegaphone from "../img/megaphone.svg";
import imgGroup2 from "../img/group2.svg";
import imgEvent from "../img/event.svg";
import imgBriefcase from "../img/briefcase.svg";
import imgMoney from "../img/money.svg";
import imgTool from "../img/tool.svg";

const PopUpMenu = () => {
  return (
    <div className="popup-menu">
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
      <span className="separator"></span>
      <ButtonMenu
        title="Page"
        desc="Communiquez et partagez avec vos clients ou fans."
        img={imgFlag}
      />
      <ButtonMenu
        title="Publicité"
        desc="Faites la promotion de votre entreprise, votre marque ou votre organisation."
        img={imgMegaphone}
      />
      <ButtonMenu
        title="Groupe"
        desc="Communiquez avec des personnes qui partagent vos centres d'intérêts."
        img={imgGroup2}
      />
      <ButtonMenu
        title="Évènement"
        desc="Rassemblez les gens autour d'un évènement public ou privé."
        img={imgEvent}
      />
      <ButtonMenu
        title="Petite annonce MarketPlace"
        desc="Vendez des articles aux membres de votre communauté."
        img={imgTool}
      />
      <ButtonMenu
        title="Collecte de fonds"
        desc="Levez des fonds pour une cause qui vous tient à coeur."
        img={imgMoney}
      />
      <ButtonMenu
        title="Offre d'emploi"
        desc="Publiez des offres d'emploi et atteindre gratuitement les candidats à proximité."
        img={imgBriefcase}
      />
    </div>
  );
};

export default PopUpMenu;

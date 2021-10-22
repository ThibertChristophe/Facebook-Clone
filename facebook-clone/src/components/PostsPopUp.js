import React from "react";
import ButtonAction from "./ButtonAction";
import friends from "../img/friends_grey.png";

const PostsPopUp = ({ nom, prenom }) => {
  return (
    <div className="postsPopUp">
      <div className="postsPopUp-content">
        <div className="postsPopUp-content-left">
          <img src="" alt="img" />
        </div>
        <div className="postsPopUp-content-right">
          <div className="postsPopUp-content-title">Nom prenom</div>
          <div className="postsPopUp-content-p1">
            <img src={friends} alt="" />
            Est devenu(e) ami(e) avec Prenom nom et 2 autres personnes
          </div>
          <div className="postsPopUp-content-p2">
            <img src={friends} alt="" />3 amis communs, dont Prenom nom et
            Prénom Nom
          </div>
        </div>
      </div>
      <div className="postsPopUp-footer">
        <ButtonAction title="Amis" />
        <ButtonAction title="Message" bleu />
        <ButtonAction title="..." small />
      </div>
    </div>
  );
};

export default PostsPopUp;

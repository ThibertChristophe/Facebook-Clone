import React from "react";
import ButtonAction from "./ButtonAction";

const PostsPopUp = (props) => {
  return (
    <div className="postsPopUp">
      <div className="postsPopUp-content">
        <div className="postsPopUp-content-left">
          <img src="" alt="img" />
        </div>
        <div className="postsPopUp-content-right">
          <div className="postsPopUp-content-title">Nom prenom</div>
          <div className="postsPopUp-content-p1">
            Est devenu(e) ami(e) avec Prenom nom et 2 autres personnes
          </div>
          <div className="postsPopUp-content-p2">
            3 amis communs, dont Prenom nom et Prénom Nom
          </div>
        </div>
      </div>
      <div className="postsPopUp-footer">
        <ButtonAction title="Amis" />
        <ButtonAction title="Message" />
        <ButtonAction title="..." />
      </div>
    </div>
  );
};

export default PostsPopUp;

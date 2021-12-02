import React from "react";

const ListFriends = () => {
  return (
    <div className="listFriends">
      <div className="listFriends__resume">
        <div className="nbAmis">78 amis</div>
      </div>
      <div className="listFriends__listInvite">
        {/**============== CARD ============== */}
        <div className="listFriends__card">
          <div className="card__left">
            <div className="card__left__img"></div>
          </div>
          <div className="data">
            <div className="name">Nom Prénom</div>
            <div className="amiCommun">2 amis en commun</div>
          </div>
          <div className="card__right__btn">
            <button className="btn-confirm">...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListFriends;

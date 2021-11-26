import React from "react";

const FriendsPage = () => {
  return (
    <div className="friendsPage">
      <div className="friendsPage__left">
        <h2>Amis</h2>
        <div className="friendsPage__left__actions">
          <div className="friendsPage__left__actions__accueil action">
            <div className="action-img"></div>
            <span>Accueil</span>
          </div>
          <div className="friendsPage__left__actions__invite action">
            <div className="action-img"></div>
            <span>Invitations</span>
          </div>
          <div className="friendsPage__left__actions__suggest action">
            <div className="action-img"></div>
            <span>Suggestions</span>
          </div>
          <div className="friendsPage__left__actions__allFriends action">
            <div className="action-img"></div>
            <span>Tous les amis</span>
          </div>
          <div className="friendsPage__left__actions__annif action">
            <div className="action-img"></div>
            <span>Anniversaires</span>
          </div>
          <div className="friendsPage__left__actions__listePerso action">
            <div className="action-img"></div>
            <span>Listes personnalisées</span>
          </div>
        </div>
      </div>
      <div className="friendsPage__right">Liste d'amis</div>
    </div>
  );
};

export default FriendsPage;

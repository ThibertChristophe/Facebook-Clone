import React from "react";

const FriendsPage = () => {
  return (
    <div className="friendsPage">
      <div className="friendsPageFond">
        {/**======================= PARTIE GAUCHE ======================== */}
        <div className="friendsPage__left">
          <div className="friendsPage__left__header">
            <h2>Amis</h2>
            <div className="friendsPage__left__header__option">
              <div className="imgEcrou"></div>
            </div>
          </div>
          <div className="friendsPage__left__actions">
            <div className="friendsPage__left__actions__accueil action">
              <div className="action-img imgaccueil">
                <svg viewBox="0 0 511.99987 511" width="25" height="25">
                  <path
                    fill="#FFF"
                    d="m511.472656 261.550781c-8.453125-47.609375-40.046875-85.835937-81.707031-103.566406 18.488281-15.503906 30.296875-38.980469 30.296875-65.207031 0-46.582032-37.234375-84.480469-83.003906-84.480469-45.769532 0-83.003906 37.894531-83.003906 84.480469 0 26.242187 11.820312 49.726562 30.328124 65.234375-6.90625 2.945312-13.597656 6.460937-19.988281 10.558593-16.105469 10.328126-29.855469 23.929688-40.453125 39.859376-10.785156-7.164063-22.382812-13.125-34.609375-17.699219 26.277344-18.996094 43.457031-50.230469 43.457031-85.476563 0-57.761718-46.136718-104.753906-102.847656-104.753906-56.710937 0-102.847656 46.992188-102.847656 104.753906 0 35.246094 17.179688 66.480469 43.457031 85.476563-55.921875 20.921875-98.8125 70.675781-109.9375 133.316406-2.054687 11.582031 1.101563 23.394531 8.652344 32.410156 7.480469 8.925781 18.394531 14.042969 29.945313 14.042969h261.460937c11.550781 0 22.464844-5.117188 29.945313-14.042969 7.554687-9.015625 10.707031-20.828125 8.652343-32.410156-1.371093-7.726563-3.230469-15.253906-5.53125-22.554687h144.515625c9.945313 0 19.34375-4.40625 25.78125-12.085938 6.492188-7.746094 9.203125-17.902344 7.4375-27.855469zm-187.417968-168.773437c0-30.042969 23.777343-54.480469 53.003906-54.480469 29.226562 0 53.003906 24.4375 53.003906 54.480469 0 30.039062-23.777344 54.476562-53.003906 54.476562-29.226563 0-53.003906-24.4375-53.003906-54.476562zm-226.960938 12.476562c0-41.21875 32.679688-74.753906 72.847656-74.753906 40.167969 0 72.851563 33.535156 72.851563 74.753906s-32.683594 74.753906-72.851563 74.753906c-40.167968 0-72.847656-33.535156-72.847656-74.753906zm210.53125 231.933594c-1.039062 1.238281-3.320312 3.3125-6.953125 3.3125h-261.460937c-3.632813 0-5.914063-2.074219-6.953126-3.3125-1.078124-1.289062-2.789062-4.03125-2.105468-7.898438 12.273437-69.113281 71.0625-119.28125 139.789062-119.28125 68.726563 0 127.519532 50.167969 139.789063 119.28125.6875 3.867188-1.023438 6.609376-2.105469 7.898438zm173.417969-67.050781c-.425781.507812-1.351563 1.355469-2.785157 1.355469h-157.128906c-8.875-16.628907-20.273437-31.546876-33.644531-44.273438 19.539063-31.082031 52.933594-49.964844 89.574219-49.964844 51.558594 0 95.660156 37.65625 104.875 89.542969.289062 1.636719-.433594 2.796875-.890625 3.339844zm0 0"
                  />
                </svg>
              </div>
              <span>Accueil</span>
            </div>
            <div className="friendsPage__left__actions__invite action">
              <div className="action-img">
                <div className="friendsInvite svgIn"></div>
              </div>
              <span>Invitations</span>
              <div className="flecheD"></div>
            </div>
            <div className="friendsPage__left__actions__suggest action">
              <div className="action-img">
                <div className="friendsAdd svgIn"></div>
              </div>
              <span>Suggestions</span>
              <div className="flecheD"></div>
            </div>
            <div className="friendsPage__left__actions__allFriends action">
              <div className="action-img">
                <div className="friendsList svgIn"></div>
              </div>
              <span>Tous les amis</span>
              <div className="flecheD"></div>
            </div>
            <div className="friendsPage__left__actions__annif action">
              <div className="action-img ">
                <div className="annif svgIn"></div>
              </div>
              <span>Anniversaires</span>
            </div>
            <div className="friendsPage__left__actions__listePerso action">
              <div className="action-img">
                <div className="friendsList svgIn"></div>
              </div>
              <span>Listes personnalisées</span>
              <div className="flecheD"></div>
            </div>
          </div>
        </div>
      </div>
      {/**======================= PARTIE DROITE ======================== */}
      <div className="friendsPage__right">
        <div className="friendsPage__right__invitations">
          <div className="friendsPage__right__invitations__header">
            <h2>Invitations</h2>
            <button className="seeAll">Voir tout</button>
          </div>
          <div className="friendsPage__right__invitations__content">
            <div className="friendsPage__right__invitations__content__card">
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
        <div className="friendsPage__right__maybe">
          <h2>Vous connaissez peut-être</h2>
          <button className="seeAll">Voir tout</button>
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;

import React from "react";

// Popup de message instantanné
const Messenger = () => {
  return (
    <div className="messenger">
      <div className="messenger__conversation">
        <div className="messenger__conversation__header">
          <div className="messenger__conversation__header__left">
            <div className="messenger__conversation__header__left__img"></div>
            <div className="messenger__conversation__header__left__name">
              Nom Prénom
            </div>
          </div>
          <div className="messenger__conversation__header__right">
            <div className="messenger__conversation__header__right__camera">
              C
            </div>
            <div className="messenger__conversation__header__right__phone">
              P
            </div>
            <div className="messenger__conversation__header__right__reduire">
              R
            </div>
            <div className="messenger__conversation__header__right__close">
              C
            </div>
          </div>
        </div>
        <div className="messenger__conversation__fil"></div>
        <div className="messenger__conversation__footer">
          <div className="messenger__conversation__footer__listAction">
            <div className="messenger__conversation__footer__listAction__plus">
              P
            </div>
            <div className="messenger__conversation__footer__listAction__img">
              I
            </div>
            <div className="messenger__conversation__footer__listAction__gif">
              G
            </div>
          </div>
          <input
            type="text"
            placeholder="Aa"
            className="messenger__conversation__footer__input"
          />
          <div className="messenger__conversation__footer__coeur">C</div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;

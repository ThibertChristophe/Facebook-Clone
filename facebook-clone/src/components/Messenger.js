import React, { useEffect, useState, useRef } from "react";

// Popup de message instantanné
const Messenger = () => {
  // Liste des messages de la conversation
  const [messages, setMessages] = useState([]);
  const [hide, setHide] = useState("messenger");
  const fil = useRef(null);
  const convers = useRef(null);
  const listeAction = useRef(null);
  const bulle = useRef(null);

  /** Init de la conversation (historique par exemple) */
  useEffect(() => {
    setMessages([...messages, "Message ..."]);
  }, []);

  // Listener sur notre liste de message pour scroller vers le bas automatiquement
  useEffect(() => {
    fil.current.scrollTop = fil.current.scrollHeight;
  }, [messages]);

  /** Lorsqu'on tappe un message, on l'ajoute a la conversation messenger  */
  function handleInput(e) {
    // On cache la liste  gauche de l'input lorsqu'on tappe des lettres
    if (e.target.value !== "") {
      listeAction.current.classList.add("hide");
    } else {
      listeAction.current.classList.remove("hide");
    }
    // Validation du message par enter
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        setMessages([...messages, e.target.value]);
        // Reset de l'input
        e.target.value = "";
      }
    }
  }

  // On "ferme" la conversation
  function handleClose() {
    listeAction.current.classList.remove("hide");
    convers.current.classList.toggle("hidden");
    setHide(convers.current.classList.value);
  }

  // Reduit la conversation
  function handleReduce() {
    listeAction.current.classList.remove("hide");
    bulle.current.classList.add("show");
    convers.current.classList.toggle("hidden");
    setHide(convers.current.classList.value);
  }

  // Click sur la bulle et refait apparaitre la conversation
  function handleBulle() {
    bulle.current.classList.remove("show");
    convers.current.classList.toggle("hidden");
    setHide(convers.current.classList.value);
  }

  return (
    <>
      <div className="messenger-reduit" ref={bulle} onClick={handleBulle}></div>
      <div className={hide} ref={convers}>
        <div className="messenger__conversation">
          {/*=============== HEADER =============== */}
          <div className="messenger__conversation__header">
            <div className="messenger__conversation__header__left">
              <div className="messenger__conversation__header__left__img"></div>
              <div className="messenger__conversation__header__left__name">
                Nom Prénom
              </div>
            </div>
            <div className="messenger__conversation__header__right">
              <div className="messenger__conversation__header__right__camera cursor">
                <svg width="26px" height="26px" viewBox="-5 -5 30 30">
                  <path
                    d="M19.492 4.112a.972.972 0 00-1.01.063l-3.052 2.12a.998.998 0 00-.43.822v5.766a1 1 0 00.43.823l3.051 2.12a.978.978 0 001.011.063.936.936 0 00.508-.829V4.94a.936.936 0 00-.508-.828zM10.996 18A3.008 3.008 0 0014 14.996V5.004A3.008 3.008 0 0010.996 2H3.004A3.008 3.008 0 000 5.004v9.992A3.008 3.008 0 003.004 18h7.992z"
                    fill="#bec2c9"
                  ></path>
                </svg>
              </div>
              <div className="messenger__conversation__header__right__phone cursor">
                <svg
                  role="presentation"
                  width="26px"
                  height="26px"
                  viewBox="-5 -5 30 30"
                >
                  <path
                    d="M10.952 14.044c.074.044.147.086.22.125a.842.842 0 001.161-.367c.096-.195.167-.185.337-.42.204-.283.552-.689.91-.772.341-.078.686-.105.92-.11.435-.01 1.118.174 1.926.648a15.9 15.9 0 011.713 1.147c.224.175.37.43.393.711.042.494-.034 1.318-.754 2.137-1.135 1.291-2.859 1.772-4.942 1.088a17.47 17.47 0 01-6.855-4.212 17.485 17.485 0 01-4.213-6.855c-.683-2.083-.202-3.808 1.09-4.942.818-.72 1.642-.796 2.136-.754.282.023.536.17.711.392.25.32.663.89 1.146 1.714.475.808.681 1.491.65 1.926-.024.31-.026.647-.112.921-.11.35-.488.705-.77.91-.236.17-.226.24-.42.336a.841.841 0 00-.368 1.161c.04.072.081.146.125.22a14.012 14.012 0 004.996 4.996z"
                    fill="#bec2c9"
                  ></path>
                  <path
                    d="M10.952 14.044c.074.044.147.086.22.125a.842.842 0 001.161-.367c.096-.195.167-.185.337-.42.204-.283.552-.689.91-.772.341-.078.686-.105.92-.11.435-.01 1.118.174 1.926.648.824.484 1.394.898 1.713 1.147.224.175.37.43.393.711.042.494-.034 1.318-.754 2.137-1.135 1.291-2.859 1.772-4.942 1.088a17.47 17.47 0 01-6.855-4.212 17.485 17.485 0 01-4.213-6.855c-.683-2.083-.202-3.808 1.09-4.942.818-.72 1.642-.796 2.136-.754.282.023.536.17.711.392.25.32.663.89 1.146 1.714.475.808.681 1.491.65 1.926-.024.31-.026.647-.112.921-.11.35-.488.705-.77.91-.236.17-.226.24-.42.336a.841.841 0 00-.368 1.161c.04.072.081.146.125.22a14.012 14.012 0 004.996 4.996z"
                    stroke="#bec2c9"
                    fill="none"
                  ></path>
                </svg>
              </div>
              <div
                className="messenger__conversation__header__right__reduire cursor"
                onClick={handleReduce}
              >
                <svg width="26px" height="26px" viewBox="-4 -4 24 24">
                  <line
                    x1="2"
                    x2="14"
                    y1="8"
                    y2="8"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="#bec2c9"
                  ></line>
                </svg>
              </div>
              <div
                className="messenger__conversation__header__right__close cursor"
                onClick={handleClose}
              >
                <svg width="26px" height="26px" viewBox="-4 -4 24 24">
                  <line
                    x1="2"
                    x2="14"
                    y1="2"
                    y2="14"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="#bec2c9"
                  ></line>
                  <line
                    x1="2"
                    x2="14"
                    y1="14"
                    y2="2"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="#bec2c9"
                  ></line>
                </svg>
              </div>
            </div>
          </div>
          {/*=============== DISCUSSION =============== */}
          <div className="messenger__conversation__fil" ref={fil}>
            {messages.map((message, index) => {
              return (
                <div
                  key={index}
                  className="messenger__conversation__fil__ligne"
                >
                  <div className="messenger__conversation__fil__ligne__message">
                    {message}
                  </div>
                  <div className="messenger__conversation__fil__ligne__bulle"></div>
                </div>
              );
            })}
          </div>
          {/*=============== FOOTER =============== */}
          <div className="messenger__conversation__footer">
            <div
              className="messenger__conversation__footer__listAction"
              ref={listeAction}
            >
              <div className="messenger__conversation__footer__listAction__plus">
                <span className="plusV"></span>
                <span className="plusH"></span>
              </div>
              <div className="messenger__conversation__footer__listAction__img">
                <svg viewBox="0 -1 17 17" height="20px" width="20px">
                  <g>
                    <path
                      d="M2.882 13.13C3.476 4.743 3.773.48 3.773.348L2.195.516c-.7.1-1.478.647-1.478 1.647l1.092 11.419c0 .5.2.9.4 1.3.4.2.7.4.9.4h.4c-.6-.6-.727-.951-.627-2.151z"
                      fill="#5d5e5f"
                    ></path>
                    <circle cx="8.5" cy="4.5" r="1.5" fill="#5d5e5f"></circle>
                    <path
                      fill="#5d5e5f"
                      d="M14 6.2c-.2-.2-.6-.3-.8-.1l-2.8 2.4c-.2.1-.2.4 0 .6l.6.7c.2.2.2.6-.1.8-.1.1-.2.1-.4.1s-.3-.1-.4-.2L8.3 8.3c-.2-.2-.6-.3-.8-.1l-2.6 2-.4 3.1c0 .5.2 1.6.7 1.7l8.8.6c.2 0 .5 0 .7-.2.2-.2.5-.7.6-.9l.6-5.9L14 6.2z"
                    ></path>
                    <path
                      d="M13.9 15.5l-8.2-.7c-.7-.1-1.3-.8-1.3-1.6l1-11.4C5.5 1 6.2.5 7 .5l8.2.7c.8.1 1.3.8 1.3 1.6l-1 11.4c-.1.8-.8 1.4-1.6 1.3z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="transparent"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="messenger__conversation__footer__listAction__gif">
                <svg viewBox="0 0 16 16" height="20px" width="20px">
                  <path
                    d="M.783 12.705c.4.8 1.017 1.206 1.817 1.606 0 0 1.3.594 2.5.694 1 .1 1.9.1 2.9.1s1.9 0 2.9-.1 1.679-.294 2.479-.694c.8-.4 1.157-.906 1.557-1.706.018 0 .4-1.405.5-2.505.1-1.2.1-3 0-4.3-.1-1.1-.073-1.976-.473-2.676-.4-.8-.863-1.408-1.763-1.808-.6-.3-1.2-.3-2.4-.4-1.8-.1-3.8-.1-5.7 0-1 .1-1.7.1-2.5.5s-1.417 1.1-1.817 1.9c0 0-.4 1.484-.5 2.584-.1 1.2-.1 3 0 4.3.1 1 .2 1.705.5 2.505zm10.498-8.274h2.3c.4 0 .769.196.769.696 0 .5-.247.68-.747.68l-1.793.02.022 1.412 1.252-.02c.4 0 .835.204.835.704s-.442.696-.842.696H11.82l-.045 2.139c0 .4-.194.8-.694.8-.5 0-.7-.3-.7-.8l-.031-5.631c0-.4.43-.696.93-.696zm-3.285.771c0-.5.3-.8.8-.8s.8.3.8.8l-.037 5.579c0 .4-.3.8-.8.8s-.8-.4-.8-.8l.037-5.579zm-3.192-.825c.7 0 1.307.183 1.807.683.3.3.4.7.1 1-.2.4-.7.4-1 .1-.2-.1-.5-.3-.9-.3-1 0-2.011.84-2.011 2.14 0 1.3.795 2.227 1.695 2.227.4 0 .805.073 1.105-.127V8.6c0-.4.3-.8.8-.8s.8.3.8.8v1.8c0 .2.037.071-.063.271-.7.7-1.57.991-2.47.991C2.868 11.662 1.3 10.2 1.3 8s1.704-3.623 3.504-3.623z"
                    fill="#5d5e5f"
                  ></path>
                </svg>
              </div>
            </div>
            <textarea
              rows="1"
              placeholder="Aa"
              className="messenger__conversation__footer__input"
              onKeyUp={handleInput}
            />
            <div className="messenger__conversation__footer__coeur">
              <img
                height="24"
                width="24"
                alt="💜"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t73/1/24/1f49c.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;

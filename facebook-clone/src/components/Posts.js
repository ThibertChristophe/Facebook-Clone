import React, { useState, useRef, useEffect } from "react";
import Comment from "./Comment";
import imgEarth from "../img/earth.svg";
import imgLike from "../img/like.svg";
import ButtonPost from "./ButtonPost";
import PostsPopUp from "./PostsPopUp";
////
import bigLike from "../img/likeBig.png";
import love from "../img/love.png";
import solidaire from "../img/solidaire.png";
import haha from "../img/haha.png";
import wouah from "../img/Wouah.png";
import triste from "../img/triste.png";
import fache from "../img/fache.png";
import { display } from "@mui/system";

const Posts = ({ titre, img }) => {
  const [like, setlike] = useState(0);
  const [liked, setLiked] = useState(false);
  const [nbComment, setNbComment] = useState(0);
  const [show, setShow] = useState(false);

  // Reference vers la div des commentaires
  const blockComment = useRef(null);

  const popUpLike = useRef();
  // Liste de commentaire avec un premier com par defaut
  const [listComment, setListComment] = useState([
    <div className="comment_containt">
      <Comment />
    </div>,
  ]);

  /** Like ou dislike un post */
  function likePost() {
    if (liked) {
      setlike(like - 1);
      setLiked(false);
    } else {
      setlike(like + 1);
      setLiked(true);
    }
  }

  /** Valide le commentaire, l'ajoute et reset l'input*/
  function validComment(e) {
    if (e.key === "Enter") {
      addComment(e.target.value);
      e.target.value = "";
    }
  }

  // Affiche les commentaires
  function displayMoreComment() {
    setShow(!show);
  }

  /**
   * Ajoute un commentaire au tableau de commentaire
   * @param {string} text
   */
  function addComment(text) {
    const commentaire = <Comment content={text} time />;
    const newComment = [...listComment, commentaire];
    setListComment(newComment);
  }

  // Quand la liste change => on actualise notre compteur de commentaire
  useEffect(() => {
    setNbComment(listComment.length);
  }, [listComment]);

  return (
    <div className="posts">
      <div className="posts-header">
        <div className="posts-header-img">
          <div className="posts-popup-fromImg">
            <PostsPopUp nom="Nom" prenom="Prénom" />
          </div>
        </div>
        <div className="posts-header-title">
          <h4>
            <a href="">
              {/* Affichage de la popup ici*/}
              <div className="posts-popup">
                <PostsPopUp nom="Nom" prenom="Prénom" />
              </div>
              {titre}
            </a>
          </h4>
          <div className="posts-header-subTitle">
            <a href="">
              <span>5 h</span>
            </a>
            <img src={imgEarth} alt="" />
          </div>
        </div>
        <div className="posts-header-btnOption"></div>
      </div>
      <div className="posts-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
        aliquid! Minus aperiam sit numquam totam reiciendis facere nobis iure
        perferendis.
      </div>
      <div className="posts-img">
        <img src={img} alt="" />
      </div>
      <div className="posts-footer">
        <div className="posts-footer-like">
          <div className="posts-footer-like-left">
            <div className="posts-footer-like-list">
              <div className="posts-footer-img-like">
                <img src={imgLike} alt="" width="19" />
              </div>
            </div>
            <div className="posts-footer-like-libelle">
              <a href="">{like}</a>
            </div>
          </div>
          <div className="posts-footer-like-right">
            <span
              className="numberComment no-select"
              onClick={displayMoreComment}
            >
              {nbComment} commentaire
            </span>
          </div>
        </div>
        <div className="posts-footer-btn">
          <div className="footer__btn active-btn" onClick={likePost}>
            <div className="footer__btn__popupLike" ref={popUpLike}>
              <img src={bigLike} alt="" />
              <img src={love} alt="" />
              <img src={solidaire} alt="" />
              <img src={haha} alt="" />
              <img src={wouah} alt="" />
              <img src={triste} alt="" />
              <img src={fache} alt="" />
            </div>
            <ButtonPost type="like" active={liked} />
          </div>
          <div className="footer__btn" onClick={displayMoreComment}>
            <ButtonPost type="comment" />
          </div>
          <div className="footer__btn">
            <ButtonPost type="share" />
          </div>
        </div>
        <div
          className="posts__footer__comment"
          style={{ display: show ? "block" : "none" }}
          ref={blockComment}
        >
          <div className="posts__footer__comment__sort">Les plus récents</div>
          <div className="posts__footer__comment__myComment">
            <div className="posts__footer__comment__myComment__profil"></div>
            <div className="posts__footer__comment__myComment__inputEtLogo">
              <input
                type="text"
                name=""
                id=""
                placeholder="Ecrivez un commentaire..."
                onKeyPress={validComment}
              />
              <div className="posts__footer__comment__myComment__inputEtLogo__logo">
                <div className="btnComment">
                  <div className="btnComment__imgSmile smallbBtn"></div>
                </div>
                <div className="btnComment">
                  <div className="btnComment__imgPhoto smallbBtn"></div>
                </div>
                <div className="btnComment">
                  <div className="btnComment__imgGIF smallbBtn"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="posts__footer__comment__list">
            {/* Comments.js */}
            {listComment.map((com, index) => {
              return (
                <div className="comment_containt" key={index}>
                  {com}
                </div>
              );
            })}

            {/* END Comment */}
          </div>
          <div className="posts__footer__comment__footer">
            <div className="posts__footer__comment__footer__moreComment">
              <span className="moreComment">
                Afficher 7 autres commentaires
              </span>
            </div>
            <div className="posts__footer__comment__footer__count">
              1 sur 65
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;

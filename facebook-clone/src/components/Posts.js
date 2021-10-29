import React, { useState, useRef, useEffect } from "react";
import Comment from "./Comment";
import imgEarth from "../img/earth.svg";
import imgLike from "../img/like.svg";
import ButtonPost from "./ButtonPost";
import PostsPopUp from "./PostsPopUp";

const Posts = ({ titre }) => {
  const [like, setlike] = useState(0);
  const [liked, setLiked] = useState(false);
  const [nbComment, setNbComment] = useState(0);
  const [show, setShow] = useState(false);

  // Reference vers la div des commentaires
  const blockComment = useRef(null);

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
    setShow(show ? false : true);
  }
  // Use effect pour montrer les commentaire
  useEffect(() => {
    if (show) {
      blockComment.current.style.display = "block";
    } else {
      blockComment.current.style.display = "none";
    }
  }, [show]);

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
        <div className="posts-header-img"></div>
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
      <div className="posts-img"></div>
      <div className="posts-footer">
        <div className="posts-footer-like">
          <div className="posts-footer-like-left">
            <div className="posts-footer-like-list">
              <div className="posts-footer-img-like">
                <img src={imgLike} alt="" width="18" />
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
          <div className="footer__btn" onClick={likePost}>
            <ButtonPost type="like" />
          </div>
          <div className="footer__btn" onClick={displayMoreComment}>
            <ButtonPost type="comment" />
          </div>
          <div className="footer__btn">
            <ButtonPost type="share" />
          </div>
        </div>
        <div className="posts__footer__comment" ref={blockComment}>
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
              <span className="moreComment">Afficher 7autres commentaires</span>
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

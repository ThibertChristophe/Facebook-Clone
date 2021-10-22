import React, { useState } from "react";
import imgEarth from "../img/earth.svg";
import imgLike from "../img/like.svg";
import ButtonPost from "./ButtonPost";
import PostsPopUp from "./PostsPopUp";

const Posts = ({ titre }) => {
  const [like, setlike] = useState(0);
  const [liked, setLiked] = useState(false);

  function likePost() {
    if (liked) {
      setlike(like - 1);
      setLiked(false);
    } else {
      setlike(like + 1);
      setLiked(true);
    }
  }

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
            <a href="">2 commentaires</a>
          </div>
        </div>
        <div className="posts-footer-btn">
          <div className="footer__btn" onClick={likePost}>
            <ButtonPost type="like" />
          </div>
          <div className="footer__btn">
            <ButtonPost type="comment" />
          </div>
          <div className="footer__btn">
            <ButtonPost type="share" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;

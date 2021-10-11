import React from "react";
import imgEarth from "../img/earth.svg";
import imgLike from "../img/like.svg";
import ButtonPost from "./ButtonPost";

const Posts = ({ titre }) => {
  return (
    <div className="posts">
      <div className="posts-header">
        <div className="posts-header-img"></div>
        <div className="posts-header-title">
          <a href="">
            <h4>{titre}</h4>
          </a>
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
              <a href="">27</a>
            </div>
          </div>
          <div className="posts-footer-like-right">
            <a href="">2 commentaires</a>
          </div>
        </div>
        <div className="posts-footer-btn">
          <ButtonPost type="like" />
          <ButtonPost type="comment" />
          <ButtonPost type="share" />
        </div>
      </div>
    </div>
  );
};

export default Posts;

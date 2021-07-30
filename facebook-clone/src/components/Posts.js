import React from "react";
import imgEarth from "../img/earth.svg";

const Posts = (props) => {
  function displayIMG() {}

  return (
    <div className="posts">
      <div className="posts-header">
        <div className="posts-header-img"></div>
        <div className="posts-header-title">
          <a href="">
            <h4>Titre</h4>
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
    </div>
  );
};

export default Posts;

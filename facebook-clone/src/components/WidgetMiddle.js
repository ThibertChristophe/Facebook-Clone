import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import Saloons from "./Saloons";
import Stories from "./Stories";
import WhatNew from "./WhatNew";

const WidgetMiddle = () => {
  // const key = "69f07742-d9fc-4151-8f3f-1a92ca63afbf";
  const NB_STORIES = 4;
  const [stories, setStories] = useState([]);

  useEffect(() => {
    for (let i = 1; i < NB_STORIES + 1; i++) {
      fetch("https://api.thecatapi.com/v1/images/search")
        .then((res) => res.json())
        .then((result) => {
          setStories((story) => [
            ...story,
            { titre: "Post " + i, img: result[0].url },
          ]);
        });
    }
  }, []);

  return (
    <div className="widget-middle">
      {/* Stories */}
      <div className="widget-middle__stories">
        <Stories />
      </div>
      {/* What news  */}
      <div className="widget-middle__whatnews">
        <WhatNew />
      </div>
      {/* Salon */}
      <Saloons />
      {/* Fil */}
      {stories.map((story, i) => {
        return (
          <div key={i}>
            <Posts titre={story.titre} img={story.img} />
          </div>
        );
      })}
      {/* <Posts titre="Post 1" />
      <Posts titre="Post 2" />
      <Posts titre="Post 3" />
      <Posts titre="Post 4" /> */}
    </div>
  );
};

export default WidgetMiddle;

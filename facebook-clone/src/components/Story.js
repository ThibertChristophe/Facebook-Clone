import React from "react";

const Story = (props) => {
  return (
    <div className="story">
      <img class="img-mini" src={props.mini} alt="" />
      <img class="fond" src={props.img} alt="" />
      <span>{props.title}</span>
    </div>
  );
};

export default Story;

import React from "react";

const Story = (props) => {
  return (
    <div className="story">
      <img src={props.img} alt="" />
      <span>{props.title}</span>
    </div>
  );
};

export default Story;

import React from "react";

const Story = (props) => {
  function displayImg() {
    if (props.img !== undefined) {
      return <img src={props.img} alt="" />;
    }
  }
  return (
    <div className="story">
      <div class="img-mini">
        <img src={props.mini} alt="" />
      </div>
      <div class="fond" alt="">
        {displayImg()}
      </div>
      <span>{props.title}</span>
    </div>
  );
};

export default Story;

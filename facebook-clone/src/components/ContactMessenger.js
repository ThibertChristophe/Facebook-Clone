import React from "react";
import barackObama from "../img/barack.JPG";

const ContactMessenger = (props) => {
  return (
    <div className="contact-messenger">
      <div className="contact-messenger-img">
        <img src={barackObama} alt="" />
      </div>
      <div className="contact-messenger-text">
        <p className="name">{props.name}</p>
        <p className="hist">{props.history}</p>
      </div>
      <div className="contact-messenger-btnPlus"></div>
    </div>
  );
};

export default ContactMessenger;

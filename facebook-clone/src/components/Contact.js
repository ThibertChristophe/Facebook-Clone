import React from "react";

const Contact = (props) => {
  function isOnline() {
    if (props.online !== undefined) {
      return <div className="contact-online"></div>;
    }
  }

  return (
    <div className="contact">
      <div className="contact-img"></div>
      <div className="contact-name">{props.name}</div>
      {isOnline()}
    </div>
  );
};

export default Contact;

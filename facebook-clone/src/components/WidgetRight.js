import React from "react";
import Contact from "./Contact";

const WidgetRight = () => {
  return (
    <div className="widget-right">
      <div className="widget-right-contact">
        <div className="widget-right-contact-header">
          <div className="widget-right-contact-title">Contacts</div>
          <div className="widget-right-contact-btnList"></div>
        </div>
        <div className="widget-right-contact-list">
          <Contact name="Prénom Nom" online />
          <Contact name="Prénom Nom" online />
          <Contact name="Prénom Nom" online />
          <Contact name="Prénom Nom" online />
          <Contact name="Prénom Nom" online />
        </div>
      </div>
    </div>
  );
};

export default WidgetRight;

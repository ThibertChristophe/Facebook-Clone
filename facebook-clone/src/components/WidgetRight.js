import React from "react";
import Contact from "./Contact";
import ButtonTransparent from "./ButtonTransparent";

const WidgetRight = () => {
  return (
    <div className="widget-right">
      <div className="widget-right-contact">
        <div className="widget-right-contact-header">
          <div className="widget-right-contact-title">Contacts</div>
          <div className="widget-right-contact-btnList">
            <ButtonTransparent class="camera" />
            <ButtonTransparent class="loupe" />
            <ButtonTransparent class="dot" />
          </div>
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

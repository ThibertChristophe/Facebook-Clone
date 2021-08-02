import React from "react";

const WidgetRight = () => {
  return (
    <div className="widget-right">
      <div className="widget-right-contact">
        <div className="widget-right-contact-header">
          <div className="widget-right-contact-title">Contacts</div>
          <div className="widget-right-contact-btnList"></div>
        </div>
        <div className="widget-right-contact-list">
          <div className="contact">
            <div className="contact-img"></div>
            <div className="contact-name">Prénom Nom</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetRight;

import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import ListRequests from "./ListRequests";

const SideBarLeftInvite = () => {
  return (
    <div className="sideBarLeftInvite">
      {/**============== HEADER ============== */}
      <div className="sideBarLeftInvite__header">
        <div className="sideBarLeftInvite__header__left">
          <Link to="/friends">
            <div className="arrowL"></div>
          </Link>
        </div>
        <div className="sideBarLeftInvite__header__right">
          <div>Amis</div>
          <div>
            <h2>Invitations</h2>
          </div>
        </div>
      </div>
      {/**============== BODY ============== */}
      <div className="sideBarLeftInvite__content">
        <Switch>
          <Route path="/friends/requests" exact component={ListRequests} />
        </Switch>
      </div>
    </div>
  );
};

export default SideBarLeftInvite;

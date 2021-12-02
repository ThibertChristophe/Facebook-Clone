import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import ListRequests from "./ListRequests";
import ListSuggestions from "./ListSuggestions";

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
          <Switch>
            <Route path="/friends/requests" exact>
              <div>
                <h2>Invitations</h2>
              </div>
            </Route>
            <Route path="/friends/suggestions" exact>
              <div>
                <h2>Suggestions</h2>
              </div>
            </Route>
            <Route path="/friends/list" exact>
              <div>
                <h2>Tous les amis</h2>
              </div>
              <div>
                <input type="text" />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
      {/**============== BODY ============== */}
      <div className="sideBarLeftInvite__content">
        <Switch>
          <Route path="/friends/requests" exact component={ListRequests} />
          <Route
            path="/friends/suggestions"
            exact
            component={ListSuggestions}
          />
        </Switch>
      </div>
    </div>
  );
};

export default SideBarLeftInvite;

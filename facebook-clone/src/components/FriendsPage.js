import React from "react";
import { Switch, Route } from "react-router-dom";
import InvitationSuggestion from "./InvitationSuggestion";
import Requests from "./Requests";
import SideBarLeftFriends from "./SideBarLeftFriends";
import SideBarLeftInvite from "./SideBarLeftInvite";

const FriendsPage = () => {
  return (
    <div className="friendsPage">
      <div className="friendsPageFond">
        {/**======================= PARTIE GAUCHE ======================== */}
        <div className="friendsPage__left">
          <Switch>
            <Route path="/friends" exact component={SideBarLeftFriends} />
            <Route
              path="/friends/requests"
              exact
              component={SideBarLeftInvite}
            />
          </Switch>
        </div>
      </div>
      {/**======================= PARTIE DROITE ======================== */}
      <div className="friendsPage__right">
        <Switch>
          <Route path="/friends" exact component={InvitationSuggestion} />
          <Route path="/friends/requests" exact component={Requests} />
        </Switch>
      </div>
    </div>
  );
};

export default FriendsPage;

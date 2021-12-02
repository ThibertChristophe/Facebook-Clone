import React from "react";
import { Switch, Route } from "react-router-dom";
import InvitationSuggestion from "./InvitationSuggestion";
import Requests from "./Requests";
import SideBarLeftFriends from "./SideBarLeftFriends";
import SideBarLeftInvite from "./SideBarLeftInvite";
import Profil from "./Profil";

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
            <Route
              path="/friends/suggestions"
              exact
              component={SideBarLeftInvite}
            />
            <Route path="/friends/list" exact component={SideBarLeftInvite} />
          </Switch>
        </div>
      </div>
      {/**======================= PARTIE DROITE ======================== */}
      <div className="friendsPage__right">
        <Switch>
          <Route path="/friends" exact component={InvitationSuggestion} />
          <Route path="/friends/requests" exact component={Requests} />
          <Route path="/friends/suggestions" exact component={Profil} />
          <Route path="/friends/list" exact component={Requests} />
        </Switch>
      </div>
    </div>
  );
};

export default FriendsPage;

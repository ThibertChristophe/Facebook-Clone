import React from "react";
import { Switch, Route } from "react-router-dom";
import SideBarWatch from "./SideBarWatch";

const Watch = () => {
  return (
    <div className="watch">
      <div className="watch__left fond">
        <div className="watch__left__sideBar">
          <Switch>
            <Route path="/watch" exact component={SideBarWatch} />
          </Switch>
        </div>
      </div>
      <div className="watch__right"></div>
    </div>
  );
};

export default Watch;

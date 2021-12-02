import React from "react";
import Header from "../components/Header";
import { Switch, Route } from "react-router-dom";
import Accueil from "../components/Accueil";
import Profil from "../components/Profil";
import Messenger from "../components/Messenger";
import FriendsPage from "../components/FriendsPage";
import Watch from "../components/Watch";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/Profil/" exact component={Profil} />
          <Route path="/Profil/*" exact component={Profil} />
          <Route path="/friends*" exact component={FriendsPage} />
          <Route path="/watch" exact component={Watch} />
        </Switch>
      </div>
      <div className="messengerPopup">
        <Messenger />
      </div>
    </div>
  );
};

export default Home;

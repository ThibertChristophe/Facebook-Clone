import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Switch, Route } from "react-router-dom";
import Accueil from "../components/Accueil";
import Profil from "../components/Profil";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/Profil/" exact component={Profil} />
          <Route path="/Profil/*" exact component={Profil} />
        </Switch>
      </div>
    </div>
  );
};

export default Home;

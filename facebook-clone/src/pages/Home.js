import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Switch, Route } from "react-router-dom";
import Accueil from "../components/Accueil";
import Profil from "../components/Profil";

const Home = ({ children }) => {
  const [content, setcontent] = useState("");

  function logOrHome() {
    console.log(localStorage.getItem("connected"));
    if (localStorage.getItem("connected") === true) {
      setcontent(
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
    } else {
      console.log("On est deco");
      setcontent(children);
    }
  }

  useEffect(() => {
    logOrHome();
  }, [children]);

  return <>{content}</>;
};

export default Home;

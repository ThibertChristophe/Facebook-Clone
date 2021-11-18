import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Switch, Route } from "react-router-dom";
import Accueil from "../components/Accueil";
import Profil from "../components/Profil";

const Home = ({ children }) => {
  const [content, setcontent] = useState("");

  // On doit check si on affiche le login ou l'accueil
  function logOrHome() {
    if (localStorage.getItem("connected") === "true") {
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
      setcontent(children);
    }
  }

  useEffect(() => {
    logOrHome();
  }, []);

  return <>{content}</>;
};

export default Home;

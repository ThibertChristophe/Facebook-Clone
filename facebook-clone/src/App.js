import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "../src/components/Login";
/**
 * Clone de facbook v. 08/2021
 *
 */
function App() {
  const [content, setcontent] = useState("");

  // UseEffect qui detecte si on est connecté ou deconnecté du compte
  useEffect(() => {
    if (localStorage.getItem("connected") === "true") {
      setcontent(<Home />);
    } else {
      setcontent(<Login />);
    }
  }, []);

  return <BrowserRouter>{content}</BrowserRouter>;
}

export default App;

import { BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Login from "../src/components/Login";
/**
 * Clone de facbook v. 08/2021
 *
 */
function App() {
  return (
    <BrowserRouter>
      <Home>
        <Login />
      </Home>
    </BrowserRouter>
  );
}

export default App;

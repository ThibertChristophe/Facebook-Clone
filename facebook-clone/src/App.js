import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "../src/components/Login";
/**
 * Clone de facbook v. 08/2021
 *
 */
function App() {
  const connected = false;

  function logOrHome() {
    if (connected) {
      return <Home />;
    } else {
      return <Login />;
    }
  }

  return <BrowserRouter>{logOrHome()}</BrowserRouter>;
}

export default App;

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

/**
 * Clone de facbook v. 08/2021
 *
 */
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

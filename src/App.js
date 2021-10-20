import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Coffees from "./components/Coffees";
import Coffee from "./components/Coffee";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/products">
          <Coffees />
        </Route>
        <Route exact path="/product/:id">
          <Coffee />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

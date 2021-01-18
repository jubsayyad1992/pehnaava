import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/homePage";

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);
const JacketsPage = () => (
  <div>
    <h1>JacketsPage</h1>
  </div>
);
const SneakersPage = () => (
  <div>
    <h1>SneakersPage</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/jackets" component={JacketsPage} />
        <Route path="/sneakers" component={SneakersPage} />
      </Switch>
    </div>
  );
}

export default App;

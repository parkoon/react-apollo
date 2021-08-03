import React from "react";
import Header from "../header/header.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../../common/styles";
import "./app.component.css";
import About from "../../pages/about/about.page";
import Home from "../../pages/home/home.page";

const App: React.FC = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

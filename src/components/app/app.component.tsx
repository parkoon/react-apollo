import React from "react";
import Header from "../header/header.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import About from "../../pages/about/about.page";
import Home from "../../pages/home/home.page";
import client from "../../common/apollo-client";

import "../../common/styles";
import "./app.component.css";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
};

export default App;

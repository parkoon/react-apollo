import React from "react";
import Header from "../header/header.component";
import { BrowserRouter as Router } from "react-router-dom";

import "../../common/styles";
import "./app.component.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
    </Router>
  );
};

export default App;

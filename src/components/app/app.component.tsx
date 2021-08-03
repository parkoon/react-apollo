import React from "react";
import Header from "../header/header.component";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
    </Router>
  );
};

export default App;

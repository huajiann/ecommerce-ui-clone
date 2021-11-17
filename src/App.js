import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./components/home/Home";

function App() {
  return (
    <React.Fragment>
      <Router basename={window.location.pathname || ""}>
        <Route path="/" exact>
          <Home />
        </Route>
      </Router>
    </React.Fragment>
  );
}

export default App;

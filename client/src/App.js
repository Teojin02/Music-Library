import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./pages/NavTabs";
import Home from "./pages/components/Home";
import Search from "./pages/components/Search";
import Favorite from "./pages/components/Favorite";



function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Favorite" component={Favorite} />
      </div>
    </Router>
  );
}

export default App
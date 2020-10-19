import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./pages/NavTabs";
import Search from "./pages/components/Search";
import Notes from "./pages/components/Notes";



function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Search} />
        <Route exact path="/Favorite" component={Notes} />
      </div>
    </Router>
  );
}

export default App
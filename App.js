import React from 'react';
import Home from  "./src/components/Home";
import Search from "./src/components/Search";
import Favorite from "./src/components/Favorite";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "./components/Home.jsx" component = {Home} />
         <Route path = "./components/Favorite.jsx" component = {About} />
         <Route path = "./components" component = {Contact} />
      </Route>
   </Router>
    </div>
  );
}
export default App;
import React from 'react';
import Home from  "./Music-Library/music/src/components/Home";
import Search from "./Music-Library/music/src/components/Search";
import Favorite from "./Music-Library/music/src/components/Favorite";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render () {
        return (
          <Router>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/Search" component={() => <Search />} />
          <Route exact path="/Favorite" component={() => <Favorite />} />
        </Switch>
      </Router>
        );
    }
}

render(<App />, window.document.getElementById('root'));
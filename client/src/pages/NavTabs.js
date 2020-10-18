import React from "react";
import "./NavTabs.css"
import {Link, useLocation} from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
function NavTabs () {
    const location = useLocation ();
    
    return (
        <Jumbotron fluid>
    <h1 id="Header">Music library</h1>
    <p>
    Search your favorite artist and songs.
    </p>
      <Navbar>
    <Nav className="mr-auto">
       <Link to= "/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
       <Link to= "/Search" className = {location.pathname === "/Search" ? "nav-link active" : "nav-link"}>Search</Link>
       <Link to= "/Favorite" className = {location.pathname === "/Favorite" ? "nav-link active" : "nav-link"}>Favorite</Link>
    </Nav>
  </Navbar>
</Jumbotron>
    );

}


export default NavTabs;
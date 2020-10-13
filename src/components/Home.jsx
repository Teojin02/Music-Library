import React from "react";
import '../style/Home.css';
import {Nav, Form, FormControl, Button} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router';


function Home() {
  
  return (
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Music Library</h1>
    <p class="lead">Search your favorite artist and songs.</p>

     <Navbar bg="light" variant="light">
    <Nav className="mr-auto">
      <li><Link to = {"./Home"}>Home</Link></li>
      <li><Link to = {"./Search.jsx"}>Search</Link></li>
      <li><Link to = {"./Favorite.jsx"}>Favorite</Link></li>
      {this.props.children}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
  </div>
</div>



  );
}

export default Home;

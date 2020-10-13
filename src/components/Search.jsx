import React from "react";
import '../style/Home.css';
import {Nav, Form, FormControl, Button} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

function Search() {
  return (
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Search</h1>
    <p class="lead">Search your favorite artist and songs.</p>

     <Navbar bg="light" variant="light">
    <Nav className="mr-auto">
      <Nav.Link href="./Home.jsx">Home</Nav.Link>
      <Nav.Link href="./Search.jsx">Search</Nav.Link>
      <Nav.Link href="./Favorite.jsx">Favorite</Nav.Link>
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

export default Search;
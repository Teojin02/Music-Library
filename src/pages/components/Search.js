import React from "react";
import {Form, FormControl, Button} from 'react-bootstrap';



function Search() {
  return (
<div>
     <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
</div>

  );
}

export default Search;

import React, { Component } from "react";
import "./style/Search.css"
class Songs extends Component {
render () {
  return (
    <div>
      <h1>
        Artist
      </h1>
      <ul>
        <li>Song 1</li>
        <li>Song 2</li>
        <li>Song 3</li>
         
      </ul>
    </div>
  )
}
}

class Find extends Component {
  render() {
    return (
       <input type="text" placeholder="Search.."/>
    )
  }
}


class Search extends Component {
  render() {
    return (
      <div className="Search">
       <Find/>
       <Songs/>
       <Songs/>
       <Songs/>
      </div>
    );
  }
}


export default Search;
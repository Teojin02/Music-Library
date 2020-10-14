
import React, { Component } from "react";
import "./style/Search.css"

let FakeServerData = {
user: {
  name: "Teojin",
  playlists: [
    {
      name:"My favorites",
      songs: ["Beat it", "Bad", "smooth criminal"]
    },
    { name:"My food",
      songs: ["ding dong", "water", "table"]},
    { name:"My nae",
      songs: ["trick", "snoot", "fan"]},
  ]
}
}
class Songs extends Component {
render () {
  return (
    <div>
      <h1>
        {this.props.playlists && this.props.playlists.length}
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
  constructor() {
    super ();
    this.state = {ServerData: {}}
  }
  componentDidMount() {
    setTimeout (() => {
      this.setState({ServerData: FakeServerData});
    }, 1000);
  }
  render() {
    return (
      <div className="Search">
        {this.state.ServerData.user ?
        <div>
        <h1>
        {this.state.ServerData.user.name}'s Playlist
        </h1>

       <Find/>
       <Songs playlists={this.state.ServerData.user && 
                        this.state.ServerData.playlists}/>
       <Songs/>
       <Songs/>
       </div> : <h1>Loading...</h1>
  } 
      </div>
    );
  }
}


export default Search;
import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from "./search-bar"

export default class Home extends Component {
  render() {
    return (
        <div className="results">
            <Logo sizeH={55} sizeW={89}/>
            <SearchBar />
        </div>
    );
  }
}

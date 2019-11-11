import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from "./search-bar"

export default class Home extends Component {

handleSearchBarSubmit (query) {
  console.log('trying to handle submit for query', query);
  this.props.history.push('/results');
}

  render() {
    return (
        <div className="results">
            <Logo sizeH={55} sizeW={89}/>
            <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
        </div>
    );
  }
}

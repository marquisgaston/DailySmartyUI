import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from "./search-bar";
import ResultsPosts from './resultsPosts';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Results extends Component {

handleSearchBarSubmit (query) {
  this.props.fetchPostsWithQuery(query);
}

  render() {
    return (
        <div className="results">
            <Logo sizeH={55} sizeW={89}/>
            <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
            <ResultsPosts />
        </div>
    );
  }
}

export default connect(null, actions)(Results);

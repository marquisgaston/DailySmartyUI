import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from "./search-bar";
import RecentPosts from "./recentPosts";

export default class Home extends Component {


  handleSearchBarSubmit = function (query) {
    event.preventDefault();
    console.log("trying to handle submit for query", query);
    this.props.history.push('/results');
}

  render() {
    return (
      <div className='home'>
        <div className="ds-logo">
          <Logo />
        </div>
          <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
          <RecentPosts />
      </div>
    );
  }
}

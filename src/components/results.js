import React, { Component } from 'react';
import Logo from "./logo";

export default class Home extends Component {
  render() {
    return (
        <div className="results">
            <h1>Results</h1>
            <Logo/>
        </div>
    );
  }
}

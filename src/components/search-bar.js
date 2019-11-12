import React, { Component } from 'react';
import {Field, reduxForm} from "redux-form";

import { withRouter } from "react-router-dom";

class SearchBar extends Component {

    handleFormSubmit = function ({query}) {
        event.preventDefault();
        this.props.onSubmit(query);
    }

    state = {  }

    renderInput(field) {
        return <input type="text" placeholder="Search DaiysSmarty" {...field.input} />
    }

    render() { 

        const {handleSubmit} = this.props;

        return ( 
                <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <div className="search-bar__wrapper">
                        <Field name="query" component={this.renderInput} />
                        <p>Press Return To Search</p>
                    </div>
                </form>
         );
    }
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar);
 
export default SearchBar;
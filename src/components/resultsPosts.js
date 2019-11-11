import React, { Component } from 'react';

import {connect} from 'react-redux';

class ResultsPosts extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="results-posts">
                <div className="results-posts_wrapper">
                    <ul className="results-posts_posts">
                        <h1>Results Go Here</h1>
                    </ul>
                </div>
            </div>
         );
    }
}

function mapStateToProps(state){
    return {
        state
    }
}
 
export default connect(mapStateToProps)(ResultsPosts);
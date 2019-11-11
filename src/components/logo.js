import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class Logo extends Component {
    state = {  }
    render() { 
        const size = { 
            height: this.props.sizeH ? this.props.sizeH : 105, 
            width: this.props.sizeW ? this.props.sizeW : 170 }
        return ( 
            <div className="logo-main">
                <Link to="/">
                    <img style= {size} src="/assets/ds_circle_logo.png" alt="daily smarty logo"/> 
                </Link>
            </div>
         );
    }
}
 
export default Logo;
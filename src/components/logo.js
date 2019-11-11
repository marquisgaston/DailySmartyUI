import React, { Component } from 'react';

class Logo extends Component {
    state = {  }
    render() { 
        const size = { 
            height: this.props.sizeH ? this.props.sizeH : 105, 
            width: this.props.sizeW ? this.props.sizeW : 170 }
        return ( 
            <div className="logo-main">
                <img style= {size} src="/assets/ds_circle_logo.png" alt="daily smarty logo"/> 
            </div>
         );
    }
}
 
export default Logo;
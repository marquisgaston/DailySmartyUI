import React, { Component } from 'react';

class Post extends Component {
    state = {  }

    renderTopics() {
        
        let topics = this.props.associated_topics.map((topic, index) => {
            return <span className="post-topic" key={index}>{topic}</span>
        })
        return topics;
        
    }

    render() { 
        return ( 
        <li className ="recent-posts">
            <div className="recent-posts-title">
                {this.props.title}
            </div>
            <div className="recent-posts_topics">
                {this.renderTopics()}
            </div>
        </li>
         );
    }
}
 
export default Post;
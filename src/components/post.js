import React, { Component } from 'react';

class Post extends Component {

    renderTopics() {
        
        let topics = this.props.associated_topics.map((topic, index) => {
            return <span className="post-topic" key={index}>{topic}</span>
        })
        return topics;
        
    }

    renderLinks() {
        let links = this.props.post_links.map((post_link, index) => {
            return (
                <div className="post-link" key={index}>
                    <div className="post-link__box">

                    </div>
                    <div className="post-link__link">
                        <a href={post_link.link_url}>useful links{index + 1}</a>
                    </div>
            </div>
            )
        })
        
        return links
    }

    render() { 
       if (this.props.type == 'recent') {
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
       } else {
        return (
            <li className="result-post">
                <div className="result-post_topics">
                    {this.renderTopics()}
                </div>
                <div className="result-post_title">
                    {this.props.title}
                </div>
                <div className="result-post__links">
                    {this.renderLinks()}
                </div>
            </li>
        )

       }

        
    }
}
 
export default Post;
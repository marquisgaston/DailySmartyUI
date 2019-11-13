import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

class Post extends Component {
    constructor(props){
        super(props);

        this.state = {
            height: 0
        }
    }

    renderTopics() {
        
        let topics = this.props.associated_topics.map((topic, index) => {
            return <span className="post-topic" key={index}>{topic}</span>
        })
        return topics;
        
    }

    getNameForPostLink(str) {
        var n = str.lastIndexOf('/');
        var name = str.substring(n + 1, str.length);
        
        if((n+1) == str.length) {
           name = str.slice(0, n);
           n = name.lastIndexOf('/');
           name = str.substring(n + 1, str.length - 1);
        } 

        if (name.includes('.html')){
            name = name.substring(0, name.length - 5);
        }
        if (name.includes('.htm')){
            name = name.substring(0, name.length - 4);
        }
        return name;
    }

    renderLinks() {

        let links = this.props.post_links.map((post_link, index) => {
            return (
                <div className="post-link" key={index}>
                    <div className="post-link__box">

                    </div>
                    <div className="post-link__link">
                        <a href={post_link.link_url}>{this.getNameForPostLink(post_link.link_url)}</a>
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
            <li onMouseEnter={()=> {this.setState({height:70})}} onMouseLeave={()=> {this.setState({height:0})}} className="result-post">
                <div className="result-post_topics">
                    {this.renderTopics()}
                </div>
                <div className="result-post_title">
                    <a href={this.props.url_for_post}>{this.props.title}</a>
                </div>
                <AnimateHeight duration={500} height={this.state.height}>
                    <div className="result-post__links">
                        {this.renderLinks()}
                    </div>
                </AnimateHeight>
                
            </li>
        )

       }

        
    }
}
 
export default Post;
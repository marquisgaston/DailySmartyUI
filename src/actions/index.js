import{ SET_RECENT_POSTS}  from './types';

import axios from "axios";

export function fetchRecentPosts() {
    return function (dispatch) {
        axios.get('https://api.dailysmarty.com/posts')
        .then(repsonse => {
            
            dispatch({
                type: SET_RECENT_POSTS,
                payload: repsonse.data.posts

            })
        })
    }
}

export function fetchPostsWithQuery(query) {
    return function (dispatch) {
        axios.get(`https://api.dailysmarty.com/search?q=${query}`)
        .then(repsonse => {
            console.log(repsonse.data.posts);
            
        })
    }
}


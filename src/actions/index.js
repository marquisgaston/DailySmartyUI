import{ SET_RECENT_POSTS,SET_RESULTS_POSTS}  from './types';


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

export function fetchPostsWithQuery(query, callBack) {
    return function (dispatch) {
        axios.get(`https://api.dailysmarty.com/search?q=${query}`)
        .then(repsonse => {
            dispatch({
                type: SET_RESULTS_POSTS,
                payload: repsonse.data.posts
            })
            if (callBack) {callBack()};
        })
    }
}


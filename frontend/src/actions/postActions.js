import { FETCH_POSTS, NEW_POST } from "./types";
import _ from "lodash";
import axios from "axios";

export const fetchPosts = newItem => dispatch => {
    console.log(JSON.stringify("newItem: " + JSON.stringify(newItem)));
    axios
        .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then(res => {
            if (!_.isEmpty(newItem)) {
                console.log("adding new item: " + JSON.stringify(newItem));
                console.log("res.data: " + JSON.stringify(res.data));
                res.data.unshift(newItem);
            }
            return res.data;
        })
        .then(allPosts => {
            console.log("allPosts" + JSON.stringify(allPosts));
            dispatch({
                type: FETCH_POSTS,
                payload: allPosts
            });
        });
};

export const createPost = postData => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post =>
            dispatch({
                type: NEW_POST,
                payload: post
            })
        );
};

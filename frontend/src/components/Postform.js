import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../actions/postActions";
import axios from "axios";

function PostForm() {
    const [newPost, setNewPost] = useState({
        title: "",
        body: ""
    });

    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get("/api/test")
            .then(res => {
                console.log("response data: " + JSON.stringify(res.data));
            })
            .catch(err => {
                console.log("error: " + err);
            });
    }, []);

    const onChange = e => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = e => {
        e.preventDefault();

        const post = {
            title: newPost.title,
            body: newPost.body
        };

        dispatch(createPost(post));

        setNewPost({
            title: "",
            body: ""
        });
    };

    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title: </label>
                    <br />
                    <input
                        type="text"
                        name="title"
                        onChange={onChange}
                        value={newPost.title}
                    />
                </div>
                <br />
                <div>
                    <label>Body: </label>
                    <br />
                    <textarea
                        name="body"
                        onChange={onChange}
                        value={newPost.body}
                    />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

PostForm.propTypes = {
    //createPost: PropTypes.func.isRequired
};

export default PostForm;

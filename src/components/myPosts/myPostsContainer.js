import React from 'react';
import './myPosts.css'
import {Post} from "./Post/Post";
import {Profile} from "../profile/profile";
import {Posts} from "../myPosts/myPosts";
import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from "../../redux/profileReducer";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePost: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);


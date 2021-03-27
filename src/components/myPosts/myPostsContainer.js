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
        posts: state.profileReducer.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            let action = addPostActionCreator(text);
            dispatch(action);
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);


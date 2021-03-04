import React from 'react';
import './myPosts.css'
import {Post} from "./Post/Post";
import {Profile} from "../profile/profile";
import {Posts} from "../myPosts/myPosts";
import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from "../../redux/profileReducer";
import StoreContext from "../../StoreContext";


export const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState();
                    let alerHi = () => {
                        let action = addPostActionCreator();
                        store.dispatch(action);
                    }

                    let onPOstChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }

                    return <Posts
                        updatePost={onPOstChange}
                        addPost={alerHi}
                        posts={state.profileReducer.posts}
                        newPostText={state.profileReducer.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

import React from 'react';
import './myPosts.css'
import {Post} from "./Post/Post";
import {Profile} from "../profile/profile";
import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from "../../redux/profileReducer";


export const Posts = (props) => {



    let newPostsData = props.posts.map(post =>(<Post message={post.message} like={post.like} />))
    let newPostElement = React.createRef();


    let onPostAdd = () => {
        props.addPost();
    }

    let onPOstChange = () => {
        let text =  newPostElement.current.value;
        props.updatePost(text);
    }

    return (
        <div>
            Мои посты

            <div>Новый пост</div>
            <textarea onChange={onPOstChange} value={props.newPostText} ref={newPostElement} cols="30" rows="10" />
            <button onClick={ onPostAdd }>Отправить</button>
            {newPostsData}
        </div>
    );
}

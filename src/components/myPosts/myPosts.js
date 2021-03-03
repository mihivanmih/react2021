import React from 'react';
import './myPosts.css'
import {Post} from "./Post/Post";
import {Profile} from "../profile/profile";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/state";


export const Posts = (props) => {

    let newPostsData = props.store.getState().profilePage.posts.map(post =>(<Post message={post.message} like={post.like} />))
    let newPostElement = React.createRef();


    let alerHi = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let onPOstChange = () => {
        let text =  newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div>
            Мои посты

            <div>Новый пост</div>
            <textarea onChange={onPOstChange} value={props.store.getState().profilePage.newPostText} ref={newPostElement} cols="30" rows="10" />
            <button onClick={ alerHi }>Отправить</button>
            {newPostsData}
        </div>
    );
}

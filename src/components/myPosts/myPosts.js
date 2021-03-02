import React from 'react';
import './myPosts.css'
import {Post} from "./Post/Post";
import {Profile} from "../profile/profile";

export const Posts = (props) => {

    console.log(props)

    let newPostsData = props.postsData.posts.map(post =>(<Post message={post.message} like={post.like} />))
    let newPostElement = React.createRef();


    let alerHi = () => {
        props.addPost();
    }

    let onPOstChange = () => {
        let text =  newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div>
            Мои посты

            <div>Новый пост</div>
            <textarea onChange={onPOstChange} value={props.postsData.newPostText} ref={newPostElement} cols="30" rows="10" />
            <button onClick={ alerHi }>Отправить</button>
            {newPostsData}
        </div>
    );
}
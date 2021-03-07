import React from 'react';
import './myPosts.css'
import {Post} from "./Post/Post";
import {Profile} from "../profile/profile";
import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from "../../redux/profileReducer";
import Preloader from "../Preloader/preloader";


export const Posts = (props) => {

    if(!props.profile){
        return <Preloader />
    }


    let newPostsData = props.posts.map(post =>(<Post message={post.message} key={post.id} like={post.like} />))
    let newPostElement = React.createRef();


/*
    let onPostAdd = () => {
        props.addPost();
    }
*/

    let onPOstChange = () => {
        let text =  newPostElement.current.value;
        props.updatePost(text);
    }



    return (
        <div>
            Мои посты <br/><br/>

            Аватар <br />
            <img src={props.profile.photos.large} alt=""/><br />
            Имя: {props.profile.fullName}<br />
            Обо мне:  {props.profile.aboutMe}<br />
            Ищет работу: {props.profile.lookingForAJob ? <span>Да</span> :  <span>Нет</span>} <br/>
            О работе: {props.profile.lookingForAJobDescription} <br/>
            Контакты: {props.profile.contacts.vk}

            <br /><br /><br />
            <div>Новый пост</div>
            {/*<textarea onChange={onPOstChange} value={props.newPostText} ref={newPostElement} cols="30" rows="10" />*/}
            <textarea onChange={onPOstChange} value={props.newPostText} ref={newPostElement} cols="30" rows="10" />
            <button onClick={ () => props.addPost() }>Отправить</button>
            {newPostsData}
        </div>
    );
}

import React from 'react';
import './myPosts.css'
import {Post} from "./Post/Post";
import Preloader from "../Preloader/preloader";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requireField} from "../../utils/validator";
import {Textarea} from "../FormControls/Textarea";

const maxLength10 = maxLengthCreator(10);

const FormPost = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[requireField, maxLength10]} component={Textarea} name={"textarea"}  placeholder={"введите сообщение"} />
            <button>Отправить</button>
        </form>
    )
}

const WallReduxForm = reduxForm({
    form: 'wall'
})(FormPost)

export const Posts = React.memo (props => {

    console.log("sdfsf")

    if (!props.profile) {
        return <Preloader/>
    }

    let newPostsData = props.posts.map(post => (
        <Post message={post.message} key={post.id} like={post.like}/>))

    const onSubmit = (formData) => {
        props.addPost(formData.textarea)
        formData.textarea = ""
    }

    return (
        <div>
            Мои посты <br/><br/>

            Аватар <br/>
            <img src={props.profile.photos.large} alt=""/><br/>
            Имя: {props.profile.fullName}<br/>
            Обо мне: {props.profile.aboutMe}<br/>
            Ищет работу: {props.profile.lookingForAJob ? <span>Да</span> : <span>Нет</span>} <br/>
            О работе: {props.profile.lookingForAJobDescription} <br/>
            Контакты: {props.profile.contacts.vk}

            <br/><br/><br/>
            <div>Новый пост</div>
            {<WallReduxForm onSubmit={onSubmit}/>}
            {newPostsData}
        </div>
    );
})

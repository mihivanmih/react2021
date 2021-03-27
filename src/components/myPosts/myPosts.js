import React, {useState} from 'react';
import './myPosts.css'
import {Post} from "./Post/Post";
import Preloader from "../Preloader/preloader";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requireField} from "../../utils/validator";
import {Textarea} from "../FormControls/Textarea";
import avanone from "../../assets/images/avanone.webp";
import ProfileForm from "../profile/myProfile/profileDataform";

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


export const ProfileData = (props) => {

    return  <div>
        { props.isowner &&  <button onClick={() => {  props.setEditMode(true)  }}>Редактировать</button> }
        <strong>Имя:</strong> {props.profile.fullName}<br/>
        <strong>Обо мне:</strong> {props.profile.aboutMe}<br/>
        <strong>Ищет работу:</strong> {props.profile.lookingForAJob ? <span>Да</span> : <span>Нет</span>} <br/>
        <strong>О работе:</strong> {props.profile.lookingForAJobDescription} <br/>
        <strong>Контакты:</strong>
        { Object.keys(props.profile.contacts).map(key => {
            return <div key={key}>
                {key} {props.profile.contacts.[key]}
            </div>
        })}
    </div>

}



export const Posts =  (props) => {

    let [editMod, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    let newPostsData = props.posts.map(post => (
        <Post message={post.message} key={post.id} like={post.like}/>))

    const onSubmit = (formData) => {
        props.addPost(formData.textarea)
        formData.textarea = ""
    }

    const onSubmitEditForm = (formData) => {
        props.saveProfile(formData).then (
            () => {
                setEditMode(false)
            }
        )

    }

    const onMainFotoSelected = (e) => {
        if(e.target.files.length)
        {
            props.savePhoto(e.target.files[0])
        }

    }

    return (
        <div>
            Мои посты! <br/><br/>

            Аватар <br/>
            {props.isowner && <input type="file" onChange={onMainFotoSelected}/>}
            <img src={props.profile.photos.large || avanone } className={'mainfoto'} alt=""/><br/>

            { editMod ? <ProfileForm initialValues={props.profile} onSubmit={onSubmitEditForm} {...props} /> : <ProfileData setEditMode={setEditMode} {...props} />}

            <br/><br/><br/>
            <div>Новый пост</div>
            {<WallReduxForm onSubmit={onSubmit}/>}
            {newPostsData}
        </div>
    );
}

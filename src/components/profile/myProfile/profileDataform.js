import React from 'react'
import {Field, reduxForm} from "redux-form";
import {requireField} from "../../../utils/validator";
import {Textarea} from "../../FormControls/Textarea";
import {Checkbox} from "antd";
import style from "../../FormControls/FormControl.module.css";

const ProfileForm = ({profile, handleSubmit, error}, props) => {

    console.log("errorerrorerrorerror", error)

    return  <form onSubmit={handleSubmit}>
        <button onClick={() => {}}>Сохранить</button><br/><br/>

        { error && < div className={style.formError}> {error}  sdsd</div> }

        <strong>Имя:</strong> <br/>
        <Field validate={[]} component="input" type="text" name={"fullName"}  placeholder={"введите имя"} />

        <br/><br/>
        <strong>Обо мне:</strong> <br/>

        <Field validate={[]} component="input" type="text" name="aboutMe"  placeholder={"Обо мне "} />

        <strong>Ищет работу:</strong> <Field validate={[]} component="input" type="checkbox" name={"lookingForAJob"}  /> <br/>

        <strong>О работе:</strong> <br/>
        <Field validate={[]} component="textarea" name={"lookingForAJobDescription"}  placeholder={"о работе"} />
        <strong>Контакты:</strong>
        { Object.keys(profile.contacts).map(key => {
            return <div key={key}>
                        <Field validate={[]} component="input" type="text" name={'contacts.'+key}   placeholder={key} />

            </div>
        })}
    </form>

}


const ReduxProfileForm = reduxForm({
    form: 'ReduxProfileForm'
})(ProfileForm)

export default ReduxProfileForm

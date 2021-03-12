import React from 'react'
import {Button, Checkbox, Input} from "antd";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {

    return (
            <form action="" onSubmit={props.handleSubmit}>
                <div>
                    <Field component={"input"} name={"login"} type="text" placeholder={"Логин"}/>
                </div>
                <div>
                    <Field component={"input"} name={"password"} type="password" placeholder={"Пароль"}/>
                </div>
                <div>

                    <Field component={"input"} type={"checkbox"} name={"rememberMe"} /> Запомнить меня
                </div>
                <div>
                    <button>Войти</button>
                </div>
            </form>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div> <br/> <br/>
            <a href="https://social-network.samuraijs.com/" target="_blank"> Авторизоваться </a> <br/><br/>

            {<LoginReduxForm onSubmit={onSubmit} />}

        </div>
    );
}
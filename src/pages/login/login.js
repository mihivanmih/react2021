import React from 'react'
import {Button, Checkbox} from "antd";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {authReduser, userlogin} from "../../redux/authReducer";
import {Input} from "../../components/FormControls/Input";
import {requireField} from "../../utils/validator";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {

    return (
            <form action="" onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input} validate={[requireField]} name={"login"} type="text" placeholder={"Логин"}/>
                </div>
                <div>
                    <Field component={Input} validate={[requireField]}name={"password"} type="password" placeholder={"Пароль"}/>
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




const Login = (props) => {

    const onSubmit = (formData) => {
        console.log('formData', formData)
        props.userlogin(formData.login, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div> <br/> <br/>
            <a href="https://social-network.samuraijs.com/" target="_blank"> Авторизоваться </a> <br/><br/>

            {<LoginReduxForm onSubmit={onSubmit} />}

        </div>
    );
}


const mapStateToProps = (state) => ({
    isAuth: state.authReduser.isAuth
})

export default connect(mapStateToProps, {userlogin})(Login);
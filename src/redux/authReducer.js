import {loginApi, securityAPI, userApi} from "../api/api";
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'FOLLOW'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
  //  isFetching: false
}

export const authReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
               // isAuth: true
            }
        default:
            return state;
    }

}

export const getCaptchaAction = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload:{captchaUrl}
})



export const setUserData = (userId, email, login, isAuth) => ({   type: SET_USER_DATA, payload:{userId, email, login, isAuth} })


export const userName = () => async (dispatch) => {
    let response = await userApi.getLoginName() //возвращается промис

    if(response.resultCode === 0){
        let {email, id , login} = response.data;
        dispatch(setUserData(id, email , login, true));
    }
}

export const userlogin = (email, password, rememberMe, captcha) => async (dispatch) => {

    let response = await loginApi.loginPost(email, password, rememberMe, captcha)

    if(response.resultCode === 0){
        dispatch(userName())
    }
    else {
        if (response.resultCode === 10){
            dispatch(getCaptchaUrl())
        }
        dispatch(stopSubmit("login", {_error: response.messages}));
    }
}

/*
export const userlogut = () => (dispatch) => {
    loginApi.logoutPost().then(response => {
        if(response.resultCode === 0){
            dispatch(setUserData(null, null , null, false));
        }
    })
}*/

export const userlogut = () => async (dispatch) => {
    let response = await loginApi.logoutPost()

    if(response.resultCode === 0){
        dispatch(setUserData(null, null , null, false));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {

    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url

    dispatch(getCaptchaAction(captchaUrl));

}

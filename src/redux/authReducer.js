import {loginApi, userApi} from "../api/api";
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'FOLLOW'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
  //  isFetching: false
}

export const authReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
               // isAuth: true
            }
        default:
            return state;
    }

}

export const setUserData = (userId, email, login, isAuth) => ({   type: SET_USER_DATA, payload:{userId, email, login, isAuth} })

export const userName = () => async (dispatch) => {
    let response = await userApi.getLoginName() //возвращается промис

    if(response.resultCode === 0){
        let {email, id , login} = response.data;
        dispatch(setUserData(id, email , login, true));
    }
}

export const userlogin = (email, password, rememberMe) => async (dispatch) => {

    let response = await loginApi.loginPost(email, password, rememberMe)

    if(response.resultCode === 0){
        dispatch(userName())
    } else {
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

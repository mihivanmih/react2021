import {loginApi, userApi} from "../api/api";

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

export const userName = () => (dispatch) => {
    userApi.getLoginName().then(response => {
        if(response.resultCode === 0){
            let {email, id , login} = response.data;
            dispatch(setUserData(email, id , login, true));
        }
    })
}

export const userlogin = (email, password, rememberMe) => (dispatch) => {
    loginApi.loginPost(email, password, rememberMe).then(response => {
        if(response.resultCode === 0){
            dispatch(userName())
        }
    })
}

export const userlogut = () => (dispatch) => {
    loginApi.logoutPost().then(response => {
        if(response.resultCode === 0){
            dispatch(setUserData(null, null , null, false));
        }
    })
}
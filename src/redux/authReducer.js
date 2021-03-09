import {userApi} from "../api/api";

const SET_USER_DATA = 'àFOLLOW'


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
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }

}

export const setUserData = (userId, email, login) => ({   type: SET_USER_DATA, data:{userId, email, login} })

export const userName = () => (dispatch) => {
    userApi.getLoginName().then(response => {
        if(response.resultCode === 0){
            let {email, id , login} = response.data;
            dispatch(setUserData(email, id , login));
        }
    })
}
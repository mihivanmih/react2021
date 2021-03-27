import {loginApi, userApi} from "../api/api";
import {stopSubmit} from 'redux-form'
import {userName} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED'


let initialState = {
    initialized: false,
}

export const appReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }

}

export const setInitialized = () => ({ type: SET_INITIALIZED })

export const initializeApp = () => (dispatch) => {
    let promise  = dispatch(userName());
    //dispatch(someDataData());

    Promise.all([promise]).then( () => {
        dispatch(setInitialized());
    })



}

//export default appReduser
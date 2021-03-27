import {profileApi, userApi} from "../api/api";
import {authReduser, userName} from "./authReducer";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCES = 'SAVE_PHOTO_SUCCES'

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

let initialStatedsasad = {
    posts: [
        {id: 1, message: 'Как дела?', like: getRandomInt(0, 120)},
        {id: 2, message: 'Чем занят?', like: getRandomInt(0, 120)},
        {id: 3, message: 'Займи 5000?', like: getRandomInt(0, 120)},
        {id: 4, message: 'Отдам через неделю', like: getRandomInt(0, 120)},
    ],
    profile: null,
    status: ""
}

export const profileReducer = (state = initialStatedsasad, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.text,
                like: getRandomInt(0, 120),
            }
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, newPost]
            }
        case DELETE_POST:
            return {  ...state, posts: state.posts.filter(p => p.id != action.Postid) }
        case SAVE_PHOTO_SUCCES:
            return {  ...state, profile: { ...state.profile, photos: action.photos }}
        case SET_USER_PROFILE:
            return {...state, profile: action.setUserProfile}
        case SET_STATUS:
            return {...state, status: action.setUserStatus}
        default:
            return state;
    }

}

export const addPostActionCreator = (text) => ({   type: ADD_POST, text: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, setUserProfile: profile })
export const setUserStatus = (userid) => ({ type: SET_STATUS, setUserStatus: userid })
export const deletePost = (Postid) => ({ type: DELETE_POST, Postid: Postid })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCES, photos })

export const ProfileShow = (UserId) => async (dispatch) => {
    let data = await userApi.getProfile(UserId)
    dispatch(setUserProfile(data))
}

export const StatusShow = (UserId) => async (dispatch) => {
    let data = await  profileApi.getProfileStatus(UserId)
    dispatch(setUserStatus(data))
}

export const updateStatus = (status) => async (dispatch) => {
    try {
        let data = await  profileApi.updateProfileStatus(status)
        if(data.data.resultCode === 0){
            dispatch(setUserStatus(status))
        }
    } catch (error) {

    }
}

export const savePhoto = (file) => async (dispatch) => {
    let responce = await profileApi.savePhoto(file)
    if(responce.data.resultCode === 0){
        dispatch(savePhotoSuccess(responce.data.data.photos))
    }
}
export const saveProfile = (formData) => async (dispatch, getState) => {
    const userId = getState().authReduser.userId
    let responce = await profileApi.updateProfile(formData)
    if(responce.resultCode === 0){
        dispatch(ProfileShow(userId))
    } else {
       dispatch(stopSubmit("ReduxProfileForm", {_error: responce.messages}));
       return Promise.reject()
    }

}

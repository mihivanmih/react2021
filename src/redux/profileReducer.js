import {userApi} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
    newPostText: "Новый пост",
    profile: null
}

export const profileReducer = (state = initialStatedsasad, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: getRandomInt(0, 120),
            }
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, newPost]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.setUserProfile}
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({   type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, setUserProfile: profile })

export const ProfileShow = (UserId) => (dispatch) => {
    userApi.getProfile(UserId).then(data => {
            dispatch(setUserProfile(data))
        }
    )
}
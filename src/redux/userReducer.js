import {userApi} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const TOOGLE_FOLLOWIN_PROGRESS = 'TOOGLE_FOLLOWIN_PROGRESS'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USER_COUNT = 'SET_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


let initialState = {
    users: [ ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

export const usersReducerNew = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return { ...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage}
        case SET_USER_COUNT:
            return { ...state, totalUsersCount: action.countUsers}
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}
        case FOLLOW:
            return {
                    ...state,
                    users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
/*                    users: state.users.map( user => {
                        if(user.id === action.userId) {
                            return { ...user, followed: true}
                        }
                        return user
                    })*/
                }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
/*                users: state.users.map( user => {
                    if(user.id === action.userId) {
                        return { ...user, followed: false}
                    }
                    return user
                })*/
            }
        case TOOGLE_FOLLOWIN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [ ...state.followingInProgress, action.userId  ]
                    : [ ...state.followingInProgress.filter(id => id != action.userId) ]


            }
        default:
            return state;
    }

}

export const follow = (userId) => ({   type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const toogleFollowingInProgress = (followingInProgress, userId) => ({ type: TOOGLE_FOLLOWIN_PROGRESS, followingInProgress, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const currentPageClick = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUserCOunt = (countUsers) => ({ type: SET_USER_COUNT, countUsers })
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const getUsersThunk = (pageSize, currentPage) => async (dispatch) => {

    dispatch(setIsFetching(true));


    let data = await userApi.getUsersApi(pageSize, currentPage)
    dispatch(currentPageClick(currentPage))
    dispatch(setUsers(data.items))
    dispatch(setTotalUserCOunt(data.totalCount))
    dispatch(setIsFetching(false));
}
/*
export const postUsersThunk = (id) => async (dispatch) => {
    dispatch(toogleFollowingInProgress(true, id))

    let data =  await userApi.postUser(id)
    if(data.resultCode === 0){
        dispatch(follow(id))
    }
    dispatch(toogleFollowingInProgress(false, id))
}

export const deleteUsersThunk = (id) => async (dispatch) => {
    dispatch(toogleFollowingInProgress(true, id))
    let data = await userApi.deleteUser(id)
    if(data.resultCode === 0){
        dispatch(unfollow(id))
    }
    dispatch(toogleFollowingInProgress(false, id))
}*/



const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {

    dispatch(toogleFollowingInProgress(true, id))

    let data = await apiMethod(id)
    if(data.resultCode === 0){
        dispatch(actionCreator(id))
    }
    dispatch(toogleFollowingInProgress(false, id))
}

export const postUsersThunk = (id) => async (dispatch) => {
    let apiMethod = userApi.postUser(id)
    let actionCreator = follow;
    followUnfollowFlow(dispatch, id, userApi.postUser.bind(id), follow)
}

export const deleteUsersThunk = (id) => async (dispatch) => {
    let apiMethod = userApi.deleteUser.bind(id)
    let actionCreator = unfollow;
    followUnfollowFlow(dispatch, id, apiMethod, actionCreator)
}




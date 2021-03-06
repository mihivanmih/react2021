const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USER_COUNT = 'SET_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


let initialState = {
    users: [ ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

export const usersReducer = (state = initialState, action) => {

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
                    users: state.users.map( user => {
                        if(user.id === action.userId) {
                            return { ...user, followed: true}
                        }
                        return user
                    })
                }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if(user.id === action.userId) {
                        return { ...user, followed: false}
                    }
                    return user
                })
            }
        default:
            return state;
    }

}

export const follow = (userId) => ({   type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const currentPageClick = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUserCOunt = (countUsers) => ({ type: SET_USER_COUNT, countUsers })
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
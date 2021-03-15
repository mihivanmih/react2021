import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersReducer.users;
}

//export const getUsersSuperSelector = createSelector(getUsers, getIsFetching, (users, isFetching) => {
export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state) => {
    return state.usersReducer.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersReducer.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersReducer.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersReducer.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersReducer.followingInProgress;
}

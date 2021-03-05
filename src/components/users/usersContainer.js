import React from 'react'
import {connect} from "react-redux";
import {Users} from "./usersC";
import {followAC, setUsersAC, unfollowAC, usersReducer} from "../../redux/userReducer";

let  mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

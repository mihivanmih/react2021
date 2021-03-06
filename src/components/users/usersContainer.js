import React from 'react'
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setUserCountAC,
    setUsersAC,
    unfollowAC,
    usersReducer
} from "../../redux/userReducer";
import * as axios from "axios";
import Users from "./users";

let  mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage
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
        },
        currentPageClick: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUserCOunt: (countUsers) => {
            dispatch(setUserCountAC(countUsers))
        }
    }
}

class UserContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCOunt(response.data.totalCount)
        })
    }

    onPageClick = (pageNumber) => {
        this.props.currentPageClick(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageClick={this.onPageClick}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserContainer);

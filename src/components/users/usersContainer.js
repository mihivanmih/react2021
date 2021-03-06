import React from "react"
import {connect} from "react-redux";
import {
    currentPageClick,
    follow,
    setIsFetching,
    setTotalUserCOunt,
    setUsers,
    unfollow,
} from "../../redux/userReducer";
import * as axios from "axios";
import Users from "./users";
import style from "./users.module.css";
import Preloader from "../Preloader/preloader";

let  mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching
    }
}

/*
let mapDispatchToProps = (dispatch) => {
    return {
        follow: followAC,
        unfollow: unfollowAC,
        setUsers: setUsersAC,
        currentPageClick: setCurrentPageAC,
        setTotalUserCOunt: setUserCountAC,
        setIsFetching: setIsFetchingAC
    }
}*/

class UserContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCOunt(response.data.totalCount)
            this.props.setIsFetching(false);
        })
    }

    onPageClick = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.currentPageClick(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setIsFetching(false);
        })
    }

    render() {
        return  <>

            {this.props.isFetching ? <Preloader />: null}

            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageClick={this.onPageClick}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    currentPageClick,
    setTotalUserCOunt,
    setIsFetching})(UserContainer);

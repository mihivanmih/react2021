import React from "react"
import {connect} from "react-redux";
import {
    deleteUsersThunk,
    follow, getUsersThunk, postUsersThunk,
    toogleFollowingInProgress,
    unfollow,
} from "../../redux/userReducer";
import Users from "./users";
import style from "./users.module.css";
import Preloader from "../Preloader/preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {Dialogs} from "../dialogs/dialogs";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersSuperSelector
} from "../../redux/userSelector";

/*let  mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress
    }
}*/
let  mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

class UserContainer extends React.Component {

    componentDidMount() {
        //this.props.getUsersThunk() //так пересылаются все пропсы
        this.props.getUsersThunk(this.props.pageSize, this.props.currentPage)
    }
/*
    componentDidMount() {
        this.props.setIsFetching(true);

        userApi.getUsersApi(this.props.pageSize, this.props.currentPage).then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalUserCOunt(data.totalCount)
            this.props.setIsFetching(false);
        })
    }
*/

    onPageClick = (pageNumber) => {
        this.props.getUsersThunk(this.props.pageSize, pageNumber)

/*        this.props.setIsFetching(true);
        this.props.currentPageClick(pageNumber)
        userApi.getUsersApi(this.props.pageSize, pageNumber).then(data => {
            this.props.setUsers(data.items)
            this.props.setIsFetching(false);
        })*/
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
                postUsersThunk={this.props.postUsersThunk}
                postDeleteUsersThunk={this.props.postDeleteUsersThunk}
                deleteUsersThunk={this.props.deleteUsersThunk}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                toogleFollowingInProgress={this.props.toogleFollowingInProgress}
            />
        </>
    }
}


export const UsersContainer = compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        toogleFollowingInProgress,
        getUsersThunk,
        postUsersThunk,
        deleteUsersThunk
    })
)(UserContainer)
/*

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    toogleFollowingInProgress,
    getUsersThunk,
    postUsersThunk,
    deleteUsersThunk
    })(UserContainer);
*/

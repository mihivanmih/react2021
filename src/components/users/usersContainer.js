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



class UserContainer extends React.Component {

    componentDidMount() {
        //this.props.getUsersThunk() //так пересылаются все пропсы
        const {pageSize, currentPage} = this.props
        this.props.getUsersThunk(pageSize, currentPage)
    }

    onPageClick = (pageNumber) => {
        const {pageSize} = this.props
        this.props.getUsersThunk(pageSize, pageNumber)
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

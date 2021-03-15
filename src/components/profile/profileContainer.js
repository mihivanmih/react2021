import React from "react"
import {Profile} from "./profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {ProfileShow, setUserProfile, StatusShow, updateStatus} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {userApi} from "../../api/api";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {Dialogs} from "../dialogs/dialogs";
import {compose} from "redux";
import {authReduser} from "../../redux/authReducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let UserId = this.props.match.params.userId;
        if(!UserId){
            //UserId=15570
            UserId=this.props.userIdMy
            if(!UserId) {
                this.props.history.push("/login")
            }
        }
/*        userApi.getProfile(UserId).then(data => {
                this.props.setUserProfile(data)
            }
        )*/
        this.props.ProfileShow(UserId);
        this.props.StatusShow(UserId)
    }



     render () {

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}





let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    userIdMy: state.authReduser.userId,
    isAuth: state.authReduser.isAuth,
})

export default compose(
    connect(mapStateToProps, {setUserProfile, ProfileShow, StatusShow, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
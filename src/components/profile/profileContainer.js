import React from "react"
import {Profile} from "./profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {ProfileShow, setUserProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {userApi} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let UserId = this.props.match.params.userId;
        if(!UserId){UserId=2;}
/*        userApi.getProfile(UserId).then(data => {
                this.props.setUserProfile(data)
            }
        )*/
        this.props.ProfileShow(UserId);
    }



    render () {
        if(!this.props.isAuth) return <Redirect to='/login' />
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    isAuth: state.authReduser.isAuth

})

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, ProfileShow})(withUrlDataContainerComponent);


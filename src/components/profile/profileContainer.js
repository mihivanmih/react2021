import React from "react"
import {Profile} from "./profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {ProfileShow, setUserProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {userApi} from "../../api/api";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {Dialogs} from "../dialogs/dialogs";

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

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}


let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

/*let AuthRedirectComponent = (props) => {
    if(!props.isAuth) return <Redirect to='/login' />
    return <ProfileContainer {...props} />
}*/

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
})

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {setUserProfile, ProfileShow})(withUrlDataContainerComponent);


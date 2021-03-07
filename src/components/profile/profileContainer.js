import React from "react"
import {Profile} from "./profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let UserId = this.props.match.params.userId;
        if(!UserId){UserId=2;}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+UserId).then(response => {
            this.props.setUserProfile(response.data)
            //console.log(response.data)
        })
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);
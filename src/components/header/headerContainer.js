import React from "react"
import {Header} from "./header";
import * as axios from "axios";
import {connect} from "react-redux";
import {authReduser, setUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {

            if(response.data.resultCode === 0){
                let {id, login, email} = response.data.data;
                this.props.setUserData(id, email, login);
            }
        })
    }

    render() {
        return <Header { ...this.props }/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.authReduser.isAuth,
    login: state.authReduser.login,
    email: state.authReduser.email
});

export default connect(mapStateToProps, {setUserData})(HeaderContainer);

import React from "react"
import {Header} from "./header";
import {connect} from "react-redux";
import {userlogut, userName} from "../../redux/authReducer";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.userName()
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

export default connect(mapStateToProps, {userName, userlogut})(HeaderContainer);

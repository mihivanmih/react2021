import {Redirect} from "react-router-dom";
import {Dialogs} from "../dialogs/dialogs";
import React from "react";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {

    return {
        isAuth: state.authReduser.isAuth
    }
}

export const withAuthRedirect = (Component) => {


        const redirectComponet = (props) => {
            if(!props.isAuth) return <Redirect to='/login' />
            return <Component {...props} />
        }

        let AuthRedirectComponent = connect(mapStateToPropsForRedirect)(redirectComponet)

        return AuthRedirectComponent;

}
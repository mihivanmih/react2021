import {Redirect} from "react-router-dom";
import {Dialogs} from "../dialogs/dialogs";
import React from "react";
import {connect} from "react-redux";
import Preloader from "../Preloader/preloader";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.authReduser.isAuth
    }
}

export const withSuspense = (Component) => {

        return (props) => {
            return <React.Suspense fallback={<Preloader />}>
                <Component { ...props } />
            </React.Suspense>
        }

}
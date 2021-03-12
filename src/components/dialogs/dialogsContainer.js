import React from 'react';
import style from './dialogs.module.css'
import {DialogItem} from "./Dialogitem/dialogitem";
import {Message} from "./Message/message";
import {
    addMessageActionCreator, messageReducer,
    updateNewMessageTextActionCreator,
} from "../../redux/messagesReduser";
import {Posts} from "../myPosts/myPosts";
import {Dialogs} from "./dialogs";
import StoreContext from "../../StoreContext";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {authReduser} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        dialogs: state.messageReducer.dialogs,
        messages: state.messageReducer.messages,
        newPostText: state.messageReducer.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        },
        addMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        }
    }
}


export const DialogsConteiner =  compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)



//let AuthRedirectComponent = withAuthRedirect(Dialogs)
//export const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
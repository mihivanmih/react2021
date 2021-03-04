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

export const DialogsConteiner = (props) => {



    return (

        <StoreContext.Consumer>
            {
                (store) =>{
                    let state = store.getState();

                    let addMessage = () => {
                        let action = addMessageActionCreator();
                        store.dispatch(action);
                    }

                    let onPOstChange = (text) => {
                        let action = updateNewMessageTextActionCreator(text);
                        store.dispatch(action);
                    }

                 return <Dialogs
                    updateMessage={onPOstChange}
                    addMessage={addMessage}
                    dialogs={state.messageReducer.dialogs}
                    messages={state.messageReducer.messages}
                    newPostText={state.messageReducer.newPostText}/>
                }
            }
        </StoreContext.Consumer>
        )
}
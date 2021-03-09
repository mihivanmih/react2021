import React from 'react';
import style from './dialogs.module.css'
import {DialogItem} from "./Dialogitem/dialogitem";
import {Message} from "./Message/message";
import {
    addMessageActionCreator, messageReducer,
    updateNewMessageTextActionCreator,
} from "../../redux/messagesReduser";
import {Redirect} from "react-router-dom";

export const Dialogs = (props) => {

    let newDialogData = props.dialogs.map(dialog => (<DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>))
    let newMessangesData = props.messages.map(dialog => (<Message key={dialog.id} message={dialog.message} />))



    let textAriaRef = React.useRef();

    if(!props.isAuth) return <Redirect to='/login' />

    let onPOstChange = () => {
        let text =  textAriaRef.current.value;
        props.updateMessage(text);
    }

    return (
        <div className={style.content}>
            Сообщения <br/><br/>
            <div className={style.dislogs}>

                <div className={style.dialog_items}>
                    {newDialogData}
                </div>

                <div className={style.messanges} >
                    {newMessangesData}

                    <textarea onChange={onPOstChange} value={props.newPostText}  name="" ref={textAriaRef} id="" cols="30" rows="10"></textarea>
                    <button onClick={ () => props.addMessage() }>Отправить</button>
                </div>

            </div>

        </div>
    )
}
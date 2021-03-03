import React from 'react';
import style from './dialogs.module.css'
import {DialogItem} from "./Dialogitem/dialogitem";
import {Message} from "./Message/message";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/state";

export const Dialogs = (props) => {

    console.log(props)

    let newDialogData = props.state.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>))
    let newMessangesData = props.state.messages.map(dialog => (<Message message={dialog.message} />))

    let textAriaRef = React.useRef();

    let addMessage = () => {
        let action = addMessageActionCreator();
        props.dispatch(action);
    }

    let onPOstChange = () => {
        let text =  textAriaRef.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
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

                    <textarea  onChange={onPOstChange} value={props.state.newPostText}  name="" ref={textAriaRef} id="" cols="30" rows="10"></textarea>
                    <button onClick={ addMessage }>Отправить</button>
                </div>

            </div>

        </div>
    )
}
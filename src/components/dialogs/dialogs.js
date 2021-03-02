import React from 'react';
import style from './dialogs.module.css'
import {DialogItem} from "./Dialogitem/dialogitem";
import {Message} from "./Message/message";

export const Dialogs = (props) => {

    let newDialogData = props.state.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>))
    let newMessangesData = props.state.messages.map(dialog => (<Message message={dialog.message} />))

    let textAriaRef = React.useRef();

    let addMessage = () => {
        let text = textAriaRef.current.value;
        alert (text);
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

                    <textarea name="" ref={textAriaRef} id="" cols="30" rows="10"></textarea>
                    <button onClick={ addMessage }>Отправить</button>
                </div>

            </div>

        </div>
    )
}
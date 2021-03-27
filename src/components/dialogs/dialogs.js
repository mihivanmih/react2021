import React from 'react';
import style from './dialogs.module.css'
import {DialogItem} from "./Dialogitem/dialogitem";
import {Message} from "./Message/message";
import {
    addMessageActionCreator, messageReducer,
    updateNewMessageTextActionCreator,
} from "../../redux/messagesReduser";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../FormControls/Textarea";
import {maxLengthCreator, requireField} from "../../utils/validator";


const maxLength100 = maxLengthCreator(100)

const DialogForm = (props) => {

   return (
       <form onSubmit={props.handleSubmit}>
           <Field component={Textarea} validate={[requireField, maxLength100]} name={"textarea"} placeholder={"введите сообщение"} />
           <button>Отправить</button>
       </form>
   )
}

const DialogReduxForm = reduxForm({
    form: 'dialog'
})(DialogForm)

export const Dialogs = (props) => {


    let newDialogData = props.dialogs.map(dialog => (<DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>))
    let newMessangesData = props.messages.map(dialog => (<Message key={dialog.id} message={dialog.message} />))

    const addNewMessage = (formData) => {
        props.addMessage(formData.textarea)
        formData.textarea = ""
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

                    <DialogReduxForm onSubmit={addNewMessage}/>

                </div>

            </div>

        </div>
    )
}
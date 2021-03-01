import style from './dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className="item">
            <NavLink to={"/messages/" + props.id } activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className="message">{props.message}</div>
    )
}

export const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Маша'},
        {id: 2, name: 'Антон'},
        {id: 3, name: 'Ванька'},
        {id: 4, name: 'Танька'},
    ]

    let newDialogData = dialogsData.map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>))

    let messangesData = [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Завтра едем смотреть динозавров'},
        {id: 3, message: 'В эко парк'},
    ]
    let newMessangesData = messangesData.map(dialog => (<Message message={dialog.message} />))

    return (
        <div className={style.content}>
            Сообщения <br/><br/>
            <div className={style.dislogs}>

                <div className={style.dialog_items}>
                    {newDialogData}
                </div>

                <div className={style.messanges} >
                    {newMessangesData}
                </div>

            </div>

        </div>
    )
}
import style from './../dialogs.module.css'
import {NavLink} from "react-router-dom";

export const DialogItem = (props) => {
    return (
        <div className="item">
            <NavLink to={"/messages/" + props.id } activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

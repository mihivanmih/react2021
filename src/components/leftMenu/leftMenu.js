import style from './leftMenu.module.css'
import {NavLink} from "react-router-dom";

export const LeftMenu = () => {
    return (
        <div className={style.leftMenu}>
             <ul>
                 <li className={style.item}>
                     <NavLink to="/profile" activeClassName={style.active}>Профиль</NavLink>
                 </li>
                 <li className={style.item}>
                     <NavLink to="/messages" activeClassName={style.active}>Сообщения</NavLink>
                 </li>
                 <li className={style.item}>
                     <NavLink to="/users" activeClassName={style.active}>Пользователи</NavLink>
                 </li>
                 <li>Найстройки</li>
                 <li><a href="https://onlinetimer.ru/#!/timer/2021-03-01T10:49:34.984Z/2021-03-01T08:47:45.266Z/forward/0/2/100/t/2021-03-01T11:59:25.799Z/" target="_blank">Таймер</a></li>
             </ul>
        </div>
    );
}
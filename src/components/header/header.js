import style from './header.module.css'
import {NavLink} from "react-router-dom";

export const Header = (props) => {



    return (
        <header>
            <a href="/"><img src="/images/logo.svg" className={style.logo} alt=""/></a>

            {
                (props.isAuth) ?
                    <div className={style.loginBlock}>
                        {props.login}
                    </div>
                 :
                    <div className={style.loginBlock}>
                        <NavLink to={'/login'}>Авторизация</NavLink>
                    </div>
            }


        </header>
    );
}
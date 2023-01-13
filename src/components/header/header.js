import style from './header.module.css'
import {NavLink} from "react-router-dom";
import {userlogut} from "../../redux/authReducer";
import logo from "../../assets/images/logo.svg";
export const Header = (props) => {



    return (
        <header>
            <a href="/"><img src={logo} className={style.logo} alt=""/></a>

            {
                (props.isAuth) ?
                    <div className={style.loginBlock}>
                        {props.login}
                        <button onClick={props.userlogut}> Выйти </button>
                    </div>
                 :
                    <div className={style.loginBlock}>
                        <NavLink to={'/login'}>Авторизация</NavLink>
                    </div>
            }


        </header>
    );
}
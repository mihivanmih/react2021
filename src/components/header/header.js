import style from './header.module.css'

export const Header = () => {
    return (
        <header>
            <img src="/images/logo.svg" className={style.logo} alt=""/>
        </header>
    );
}
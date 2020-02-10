import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

let Header = (props) => {
    return (
        <header className={style.header}>
            <img className={style.header__logo} src={require("./../../img/Logo.png")} alt="Logo"/>
            <p className={style.header__name}>Name of SocNet</p>
            {props.isAuth ?
                <div className={style.userBlock}>
                    <div>{props.login}</div>
                    <button className={style.logout} onClick={props.logout}>Logout</button>
                </div>
                 :
                <div className={style.loginBlock}>
                    <NavLink to={'/Login'}>Login</NavLink>
                </div>}

        </header>
    )
};
export default Header


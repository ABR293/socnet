import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

let Header = (props) => {
    return (
        <header className={style.header}>
            <img className={style.header__logo} src={require("./../../img/Logo.png")} alt="Logo"/>
            <p className={style.header__name}>React-Samurai`s Way</p>
            {props.isAuth ?
                <div className={style.userBlock}>
                    <div>{props.login}</div>
                    <button className={style.logout} onClick={props.logout}>
                        <i className="fa fa-sign-out" aria-hidden="true"> </i>
                    </button>
                </div>
                 :
                <div className={style.loginBlock}>
                    <NavLink to={'/Login'}>Login</NavLink>
                </div>}

        </header>
    )
};
export default Header


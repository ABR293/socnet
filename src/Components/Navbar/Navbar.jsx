import React, {Component} from 'react';
import style from'./Navbar.module.css';
import {NavLink} from "react-router-dom";


export default class Navbar extends Component {
    render() {
        return (
            <nav className={style.navbarblock}>
                <ul className={style.navmenu}>
                    <li><NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink></li>
                    <li><NavLink to="/dialogs" activeClassName={style.activeLink}>Dialogs</NavLink></li>
                    <li><NavLink to="/news" activeClassName={style.activeLink}>News</NavLink></li>
                    <li><NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink></li>
                    <li><NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink></li>
                </ul>
            </nav>
        )
    }
}

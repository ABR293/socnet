import React, {Component} from 'react';
import style from './Header.module.css';

export default class Header extends Component {
  render(){
        return (
            <header className={style.header}>
                <img className={style.header__logo} src={require("./../../img/GS-logo.png")} alt="Logo"/>
                <p className={style.header__name}>Name of SocNet</p>
            </header>
        )
    }
}

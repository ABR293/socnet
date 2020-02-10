import React, {Component} from 'react';
import style from './Contact.module.css';
import {NavLink} from "react-router-dom";
import noAvatar from "../../../../img/NA5.jpg";

export default class Contact extends Component {
    render() {

        return (


            <div className={style.block}>
                <div className={style.iconbox}>
                    <img className={style.icon} src={!this.props.avatar ? noAvatar : this.props.avatar} alt=""/>
                    <div className={style.activity}> </div>
                </div>
                <div className={style.name}>
                    <NavLink to={"/dialogs/" + this.props.id + '/'}  activeClassName={style.activLink}>{this.props.name} </NavLink>
                </div>
            </div>
        )
    }
}
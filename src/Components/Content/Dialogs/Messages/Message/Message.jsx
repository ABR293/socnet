import React, {Component} from 'react';
import style from './Message.module.css';
import {timeout} from "q";

export default class Message extends Component {
    render() {

        return (
            <div className={style.block}>
                <div className={style.iconbox}>
                    <img className={style.icon} src={this.props.avatar} alt=""/>
                    <div className={style.activity}> </div>
                </div>
                <div className={style.message}>
                    <p className={style.messege__text}>{this.props.text}</p>
                </div>
            </div>
        )
    }
}
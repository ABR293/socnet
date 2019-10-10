import React, {Component} from 'react';
import style from './Post.module.css';


export default class Post extends Component {
    render() {

        let url1= require("./Av2.jpg");

        return (
                <div className={style.block}>
                    <div className={style.iconbox}>
                        <img className={style.icon} src={url1} alt=""/>
                        <div className={style.activity}> </div>
                    </div>
                    <div className={style.message}>
                        <p className={style.messege__text}>{this.props.text}</p>
                    </div>
                </div>
        )
    }
}
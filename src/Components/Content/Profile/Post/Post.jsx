import React from 'react';
import style from './Post.module.css';
import noAvatar from '../../../../img/NA5.jpg'

const Post = (props) => {
    return (
        <div className={style.block}>
            <div className={style.iconbox}>
                <img className={style.icon} src={!props.avatar ? noAvatar : props.avatar} alt=""/>
                <div className={style.activity}> </div>
            </div>
            <div className={style.message}>
                <p className={style.messege__text}>{props.text}</p>
            </div>
        </div>
    )
};
export default Post; 
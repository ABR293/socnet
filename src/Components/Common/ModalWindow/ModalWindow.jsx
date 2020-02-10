import React from 'react';
import style from './ModalWindow.module.css';

export default class Modal extends React.Component{
    render(){
        return(
            <div className={style.ModalBackground}>
                <div className={style.ModalWindow}>
                    {this.props.children}
                </div>
            </div>
        )
    }
};
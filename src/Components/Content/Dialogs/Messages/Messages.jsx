import React, {Component} from 'react';
//import style from './Messages.module.css';
import Message from "./Message";

export default class Messages extends Component {

    render() {

        let MessageElement = this.props.messages.map((el)=> {
            return(
                <Message avatar={el.avatar} key={el.id} text={el.text} activity={el.activity}/>
            );
        });

        return (
            <div className='Messages'>
                {MessageElement}
            </div>
        )
    }
}
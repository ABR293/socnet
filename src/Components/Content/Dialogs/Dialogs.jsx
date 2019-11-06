import React from 'react';
import style from './Dialogs.module.css';
import Contact from "./Contact";
import {Route} from 'react-router-dom';
import Messages from "./Messages";
import {Field, reduxForm} from "redux-form";

const DialogForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} >
            <Field
                className={style.inputblock}
                component='input'
                name='newMessage'
                placeholder='Write your message...'
                type='text'
            />
            <button className={style.sendbtn}
                    //onClick={() => {props.sendMessage(text)}}
            >
                Send message
            </button>
        </form>
    )
};

let DialogReduxForm = reduxForm({form: 'newMessage'})(DialogForm);


const Dialogs = (props) => {
        let Adress = props.messageData.map( (el)=>{
            return(
                <Contact name={el.name}  id={el.id} key={el.id}/>
                )
            }
        );
        let Messedges = props.messageData.map( (el)=>{
                return(
                    <Route path={'/dialogs/'+ el.id} key={el.id}
                           render={() => <Messages messages={el.messages}/>}/>
                )
            }
        );

        let newMessageText = React.createRef();

        //let text = props.newMessageText;

        const sendMessage = (values) => {
            props.sendMessage(values.newMessage)
        };

        return (
            <div className={style.content}>
                <div className={style.header}>Dialogs</div>
                <div className={style.dialogs}>
                    {Adress}
                </div>
                <div className={style.separator}> </div>
                <div className={style.dialog}>
                    {Messedges}
                    <div>
                       <DialogReduxForm onSubmit={sendMessage}/>
                       {/* <button className={style.sendbtn}
                                onClick={() => {props.sendMessage(text)}}
                        >
                            Send message
                        </button>*/}
                    </div>
                </div>

            </div>
        );
};
export default Dialogs;


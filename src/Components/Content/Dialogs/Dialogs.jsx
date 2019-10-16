import React from 'react';
import style from './Dialogs.module.css';
import Contact from "./Contact";
import {Route} from 'react-router-dom';
import Messages from "./Messages";


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

        let text = props.newMessageText;

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
                        <textarea className={style.inputblock}
                                  ref={newMessageText}
                                  onChange={() => {let text = newMessageText.current.value; props.messageTextChange(text);}}
                                  value={props.newMessageText}/>

                        <button className={style.sendbtn}
                                onClick={() => {props.sendMessage(text)}}
                        >
                            Send message
                        </button>
                    </div>
                </div>

            </div>
        );
};
export default Dialogs;


import React from 'react';
import style from './Dialogs.module.css';
import Contact from "./Contact";
import {Route} from 'react-router-dom';
import Messages from "./Messages";
import {changeMessageTextCreator, SendMessageCreator} from "../../../Redux/State";


const Dialogs = (props) => {
        let Adress = props.dialogs.messageData.map( (el)=>{
            return(
                <Contact name={el.name}  id={el.id}/>
                )
            }
        );
        let Messedges = props.dialogs.messageData.map( (el)=>{
                return(
                    <Route path={'/dialogs/'+ el.id}
                           render={() => <Messages messages={el.messages}/>}/>
                )
            }
        );

        let newMessageText = React.createRef();
        let sendMessage = () => {
            let text = newMessageText.current.value;
            props.dispatch(SendMessageCreator(text));
            props.dispatch(changeMessageTextCreator(''));
        };
        let onMessageTextChange = () => {
            let text = newMessageText.current.value;
            props.dispatch(changeMessageTextCreator(text));
            console.log(text);
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
                        <textarea className={style.inputblock}
                                  ref={newMessageText}
                                  onChange={onMessageTextChange}
                                  //value={}/>
                            />
                        <button className={style.sendbtn}
                                onClick={sendMessage}
                        >
                            Send message
                        </button>
                    </div>
                </div>

            </div>


        );
};
export default Dialogs;


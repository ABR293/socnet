import React from 'react';
import Dialogs from "./Dialogs";
import {changeMessageTextCreator, SendMessageCreator} from "../../../Redux/DialogReducer";

const DialogsConteiner =(props) => {

    let sendMessage = (text) => {
        props.store.dispatch(SendMessageCreator(text));
        props.store.dispatch(changeMessageTextCreator(''));

    };
    let messageTextChange = (text)=>{
        props.store.dispatch(changeMessageTextCreator(text));
    };
    return(<Dialogs
            sendMessage={sendMessage}
            messageTextChange={messageTextChange}
            messageData={props.store.getState().dialogsPage.messageData}
            newMessageText={props.store.getState().dialogsPage.newMessageText}

        />
    )
};
export default DialogsConteiner


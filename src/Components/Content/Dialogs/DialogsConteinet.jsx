import React from 'react';
import Dialogs from "./Dialogs";
import {changeMessageTextCreator, SendMessageCreator} from "../../../Redux/DialogReducer";
import connect from "react-redux/es/connect/connect";

/*const DialogsConteiner = () => {


    return (
        <Consumer>
            {
                (store) => {
                    let sendMessage = (text) => {
                        store.dispatch(SendMessageCreator(text));
                        store.dispatch(changeMessageTextCreator(''));

                    };
                    let messageTextChange = (text) => {
                        store.dispatch(changeMessageTextCreator(text));
                    };
                    return (
                        <Dialogs
                            sendMessage={sendMessage}
                            messageTextChange={messageTextChange}
                            messageData={store.getState().dialogsPage.messageData}
                            newMessageText={store.getState().dialogsPage.newMessageText}/>)
                }
            }
        </Consumer>
    )
};*/
let mapStateToProps = (state) => {
    return {
        messageData: state.dialogsPage.messageData,
        newMessageText: state.dialogsPage.newMessageText
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(SendMessageCreator(text));
            dispatch(changeMessageTextCreator(''));
        },
        messageTextChange: (text) => {
            dispatch(changeMessageTextCreator(text));
        }
    };
};


const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsConteiner;


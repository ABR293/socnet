//import React from 'react';
import Dialogs from "./Dialogs";
import {changeMessageTextCreator, SendMessageCreator} from "../../../Redux/DialogReducer";
import connect from "react-redux/es/connect/connect";

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


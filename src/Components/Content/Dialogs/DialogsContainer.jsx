import React from 'react';
import Dialogs from "./Dialogs";
import {SendMessage} from "../../../Redux/DialogReducer";
import connect from "react-redux/es/connect/connect";
import {WithAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

 class DialogsConteiner extends React.Component{

     componentDidMount() {
         /*тут будут запрос за историей диалогов*/
     }

     render(){

         return(
             <Dialogs {...this.props}/>
         )
     }
 }

let mapStateToProps = (state) => {
    return {
        messageData: state.dialogsPage.messageData,
        newMessageText: state.dialogsPage.newMessageText,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(SendMessage(text));
        },
    };
};

/*let AuthredirectComponent = WithAuthRedirect(DialogsConteiner);

export default connect(mapStateToProps, mapDispatchToProps)(AuthredirectComponent);*/

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(DialogsConteiner);
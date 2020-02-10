import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogReducer";

const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let rerenderEntireTree = () =>{
    console.log('Change');
};







let store = {

    _state: {
        dialogsPage:{
                newMessageText: '',
                messageData:
                    [
                        {
                            id: 12345, name: 'dimon', messages: [
                                {avatar: 1, text: 'adsbnvnvnvad', activity: true},
                                {avatar: 1, text: 'dfhhgrdgrdgd1', activity: true},
                                {avatar: 1, text: 'dasdg cvxfgg1', activity: true},
                                {avatar: 1, text: 'fgcfdfdfsdffg', activity: true},
                            ]
                        },
                        {
                            id: 98615, name: 'peter', messages: [
                                {avatar: 1, text: 'ghgfhgfdsfsdfdsfdsfdsfad', activity: true},
                                {avatar: 1, text: 'dfhgfghdfsfsdafd1', activity: true},
                                {avatar: 1, text: 'dasdtytry1', activity: true},
                                {avatar: 1, text: 'fgttyfopoipipg', activity: true},
                            ]
                        },
                        {
                            id: 16576, name: 'andrey', messages: [
                                {avatar: 1, text: 'ghgfhgfad', activity: true},
                                {avatar: 1, text: 'dfhgfghd1', activity: true},
                                {avatar: 1, text: 'dasdtytry1', activity: true},
                                {avatar: 1, text: 'fgttyfopoipipg', activity: true},
                            ]
                        },
                        {
                            id: 78678, name: 'denis', messages: [
                                {avatar: 1, text: 'adsaytyrtyd', activity: true},
                                {avatar: 1, text: 'dfhyrtyrhd1', activity: true},
                                {avatar: 1, text: 'dasdtedsdasdsartre1', activity: true},
                                {avatar: 1, text: 'fgfrtertttg', activity: true},
                            ]
                        },
                        {
                            id: 64213, name: 'Misha', messages: [
                                {avatar: 1, text: 'adttyrytryysad', activity: true},
                                {avatar: 1, text: 'dfhftgdfghd1', activity: true},
                                {avatar: 1, text: 'dasdtyruucsd1', activity: true},
                                {avatar: 1, text: 'fg4yuyuyfcxzczxczxczxczxcg', activity: true},
                            ]
                        }
                    ],
            },
        profilePage: {
                id: 8327178, name: 'ADMIN!!', avatar: '3', PostText: '', posts: [
                    {id: 34522, name: 'sdsadas', message: "wfghcsfbzvddafvldmkvale;dkgjeg"},
                    {id: 37867, name: 'rewe', message: "wthtbvsdrtarsteale;dkgjeg"},
                    {id: 45452, name: 'sdsadas', message: "wfksadaifgyit7iyujvbcbrqergsdfkjsaldmkvale;dkgjeg"},

                ]
            },
    },


    getState(){
        return (this._state);
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage =dialogsReducer(this._state.dialogsPage, action);
        rerenderEntireTree();


        // if(action.type ===  ADD_POST){
        //     let NewPost = {
        //         id: 89080,
        //         name: 'Vaso',
        //         message: action.message,
        //     };
        //     this._state.profilePage.posts.unshift(NewPost);
        //     rerenderEntireTree();}
        // else if (action.type === CHANGE_POST_TEXT){
        //     this._state.profilePage.PostText = action.text;
        //     rerenderEntireTree();}
        // else if(action.type ===  CHANGE_MESSAGE_TEXT){
        //     this._state.dialogsPage.newMessageText = action.text;
        //     rerenderEntireTree(); }
        // else if (action.type === SEND_MESSAGE){
        //     console.log('You are send message');
        //     rerenderEntireTree();}
        // else {console.log("OOO!!!")}


    },
    subscribe (observer) {
        rerenderEntireTree = observer;
    }
};
store.subscribe(rerenderEntireTree);
//

export default store;


// Старый state для обращений

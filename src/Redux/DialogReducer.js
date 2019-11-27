const SEND_MESSAGE = "socNet/dialog/SEND-MESSAGE";
const CHANGE_MESSAGE_TEXT = "socNet/dialog/CHANGE-MESSAGE-TEXT";



export let changeMessageTextCreator = (text) => ({type: CHANGE_MESSAGE_TEXT, text: text });
export let SendMessageCreator = (message) => ({type: SEND_MESSAGE, message: message });


let initialState = {
    messageData:
        [
            {
                id: 12345, name: 'dimon', messages: [
                    {id: 15678, avatar: 1, text: 'adsbnvnvnvad', activity: true},
                    {id: 18978, avatar: 1, text: 'dfhhgrdgrdgd1', activity: true},
                    {id: 11378, avatar: 1, text: 'dasdg cvxfgg1', activity: true},
                    {id: 15458, avatar: 1, text: 'fgcfdfdfsdffg', activity: true},
                ]
            },
            {
                id: 98615, name: 'peter', messages: [
                    {id: 15678, avatar: 1, text: 'ghgfhgfdsfsdfdsfdsfdsfad', activity: true},
                    {id: 16781, avatar: 1, text: 'dfhgfghdfsfsdafd1', activity: true},
                    {id: 13478, avatar: 1, text: 'dasdtytry1', activity: true},
                    {id: 15345, avatar: 1, text: 'fgttyfopoipipg', activity: true},
                ]
            },
            {
                id: 16576, name: 'andrey', messages: [
                    {id: 13453, avatar: 1, text: 'ghgfhgfad', activity: true},
                    {id: 76888, avatar: 1, text: 'dfhgfghd1', activity: true},
                    {id: 14538, avatar: 1, text: 'dasdtytry1', activity: true},
                    {id: 45338, avatar: 1, text: 'fgttyfopoipipg', activity: true},
                ]
            },
            {
                id: 78678, name: 'denis', messages: [
                    {id: 23178, avatar: 1, text: 'adsaytyrtyd', activity: true},
                    {id: 21338, avatar: 1, text: 'dfhyrtyrhd1', activity: true},
                    {id: 76888, avatar: 1, text: 'dasdtedsdasdsartre1', activity: true},
                    {id: 78987, avatar: 1, text: 'fgfrtertttg', activity: true},
                ]
            },
            {
                id: 64213, name: 'Misha', messages: [
                    {id: 19008, avatar: 1, text: 'adttyrytryysad', activity: true},
                    {id: 18978, avatar: 1, text: 'dfhftgdfghd1', activity: true},
                    {id: 67658, avatar: 1, text: 'dasdtyruucsd1', activity: true},
                    {id: 15098, avatar: 1, text: 'fg4yuyuyfcxzczxczxczxczxcg', activity: true},
                ]
            }
        ],
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            console.log("You send:" + action.message);
            return state;
        }
        default: {
            return state;
        }
    }
};




/*
dispatch(action) {
    if(action.type ===  ADD_POST){
        let NewPost = {
            id: 89080,
            name: 'Vaso',
            message: action.message,
        };
        this._state.profile[0].posts.unshift(NewPost);
        rerenderEntireTree();

    } else if (action.type === CHANGE_TEXT){
        this._state.profile[0].PostText = action.text;
        rerenderEntireTree();
    } else {console.log("OOO!!!")}

},*/

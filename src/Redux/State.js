
const ADD_POST = "ADD-POST";
const CHANGE_TEXT = "CHANGE-TEXT";



let rerenderEntireTree = () =>{
    console.log('Change');
};

export let addPostCreator = (message) => ({type: ADD_POST, message: message });
export let changeTextCreator = (text) => ({type: CHANGE_TEXT, text: text });







let store = {

    _state: {
        dialogs: [
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
        profile: [

            {
                id: 8327178, name: 'ADMIN!!', avatar: '3', PostText: '', posts: [
                    {id: 34522, name: 'sdsadas', message: "wfghcsfbzvddafvldmkvale;dkgjeg"},
                    {id: 37867, name: 'rewe', message: "wthtbvsdrtarsteale;dkgjeg"},
                    {id: 45452, name: 'sdsadas', message: "wfksadaifgyit7iyujvbcbrqergsdfkjsaldmkvale;dkgjeg"},

                ]
            },
        ],
    },

    getState() {
        return (this._state);
    },

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

    },
    subscribe (observer) {
        rerenderEntireTree = observer;
    }
};
store.subscribe(rerenderEntireTree);
window.store = store;

export default store;


// Старый state для обращений

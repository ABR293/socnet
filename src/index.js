import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";
import store from "./Redux/Store";
import {Provider} from "react-redux"


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
        , document.getElementById('root'));
};


rerenderEntireTree(store.getState());

//ReactDOM.render(<BrowserRouter><App state={stateData} addPost={addPost}/></BrowserRouter>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

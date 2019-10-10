import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./Redux/Store";



export let rerenderEntireTree = () =>{
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
        ,document.getElementById('root'));
};


rerenderEntireTree(store.getState());


store.subscribe(rerenderEntireTree);

//ReactDOM.render(<BrowserRouter><App state={stateData} addPost={addPost}/></BrowserRouter>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost} from "./Redux/State";
import {changePostText} from "./Redux/State";

export let rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changePostText={changePostText}/>
        </BrowserRouter>
        ,document.getElementById('root'));
};


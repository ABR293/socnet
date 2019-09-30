import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


export let rerenderEntireTree = (state1, addPost) =>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state1} addPost={addPost} />
        </BrowserRouter>
        ,document.getElementById('root'));
};


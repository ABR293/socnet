import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import stateData from './Redux/State';
import {addPost} from "./Redux/State";
import {BrowserRouter} from 'react-router-dom';
import {rerenderEntireTree} from './Render'



rerenderEntireTree(stateData, addPost);

//ReactDOM.render(<BrowserRouter><App state={stateData} addPost={addPost}/></BrowserRouter>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
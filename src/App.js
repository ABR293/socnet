import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Content from './Components/Content';



const  App = (props) => {
        return (
            <div className = 'app'>
            <Header/>
            <Navbar/>

            <Content
                store={props.store}
                state={props.state}
                dispatch={props.dispatch}/>
            <Footer/>
            </div>


        )
    };
export default App


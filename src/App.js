import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Content from './Components/Content';
import HeaderContainer from "./Components/Header/HeaderContainer";



const  App = (props) => {
        return (
            <div className = 'app'>
            <HeaderContainer/>
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


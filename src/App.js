import React, {Component}from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Content from './Components/Content';



export default class App extends Component {
    render(){

        return (
            <div className = 'app'>
            <Header/>
            <Navbar/>

            <Content state={this.props.state}
                     dispatch={this.props.dispatch}/>
            <Footer/>
            </div>


        )
    }
}


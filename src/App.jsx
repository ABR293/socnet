import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Content from './Components/Content';
import HeaderContainer from "./Components/Header/HeaderContainer";
import {authentication} from "./Redux/AuthReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {initializeApp} from "./Redux/AppReducer";
import Preloader from "./Components/Common/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        return (
            !this.props.initialized ?
                <Preloader/>
            :
            <div className='app'>
                <HeaderContainer/>
                <Navbar/>

                <Content
                    store={this.props.store}
                    state={this.props.state}
                    dispatch={this.props.dispatch}/>
                <Footer/>
            </div>
        )
    };
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});


export default compose(
    withRouter,
    connect (mapStateToProps, {authentication, initializeApp})) (App);

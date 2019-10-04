import React, {Component} from 'react';
import style from './Content.module.css';
import Dialogs from "./Dialogs";
import {Route} from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Settings";
import News from "./News";
import Music from "./Music";


export default class Content extends Component {
    render() {


        return (


                <div className={style.content}>
                    <Route path='/dialogs' component={() => <Dialogs dialogs={this.props.state.dialogs}/>} />
                    <Route path='/profile' component={() => <Profile profile={this.props.state.profile}
                                                                     dispatch={this.props.dispatch}
                    />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>

        )
    }
}

